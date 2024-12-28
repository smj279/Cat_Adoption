import './AvailableCats.css';
import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: 2 },
  { name: 'Mittens', age: 1 },
  { name: 'Shadow', age: 3 },
  { name: 'Luna', age: 4 },
  { name: 'Simba', age: 2 },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('All');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign them to the cats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initially show all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter cats based on search input and age filter
  useEffect(() => {
    let filtered = cats.filter((cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase())
    );

    if (ageFilter !== 'All') {
      filtered = filtered.filter((cat) => cat.age === parseInt(ageFilter));
    }

    setFilteredCats(filtered);
  }, [search, ageFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Search and Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-3"
        />

        <select
          className="form-select mb-3"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="All">All Ages</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
        </select>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found based on your search/filter criteria.</p>
        )}
      </div>
    </section>
  );
}
