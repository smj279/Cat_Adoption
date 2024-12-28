import { useEffect, useState } from 'react';
import './Home.css';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Maine Coon' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Snowball', age: '3', breed: 'Ragdoll' },
  { name: 'Fluffy', age: '4', breed: 'Bengal' },
  { name: 'Tom', age: '2', breed: 'Abyssinian' },
  { name: 'Luna', age: '2', breed: 'Sphynx' },
  { name: 'Bella', age: '5', breed: 'British Shorthair' },
  { name: 'Oliver', age: '3', breed: 'Burmese' },
  { name: 'Leo', age: '1', breed: 'Scottish Fold' },
  { name: 'Max', age: '2', breed: 'Russian Blue' },
  { name: 'Zara', age: '3', breed: 'American Shorthair' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setError('Error fetching cat images');
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <section className="text-center mt-4">
        <h2 className="header-title">Welcome to Purrfect Adoption</h2>
        <p className="lead-text">
          Discover your perfect feline companion today! Our cats, representing various breeds and temperaments, are ready to find their forever home with you.
        </p>
      </section>

      <section className="featured-cats-container">
        <h2 className="section-title">Featured Cats</h2>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image-container">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2 cat-image"
                />
              </div>
              <div className="cat-info">
                <h3 className="h5 mb-1 cat-name">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="text-muted">{cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
