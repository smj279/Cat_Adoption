import './About.css'; 

const About = () => {
  return (
    <div className="about-container container mt-5">
      <h2 className="about-header">About Purrfect Adoption</h2>
      <p className="about-introduction">
        At Purrfect Adoption, we believe every cat deserves a loving home. Our mission is to connect these wonderful animals with caring families. Join us in our journey to provide safe and happy lives for our feline friends!
      </p>

      <section className="mission-section">
        <h3 className="section-title">Our Mission</h3>
        <div className="mission-content">
          <p>
          Our goal is clear: to provide loving homes for as many cats as we can. We collaborate closely with local shelters, offering care, attention, and affection to cats in need before they are placed in their forever homes. Every cat deserves a happy life, and we are committed to making that a reality.
          </p>
        
        </div>
      </section>

      <section className="values-section">
        
        <div className="values-list">
          <div className="value-item">
            <i className="fas fa-paw value-icon"></i>
            <h4>Compassion</h4>
            <p>We believe in showing love and kindness to every cat, no matter their background.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-heart value-icon"></i>
            <h4>Commitment</h4>
            <p>Our team is dedicated to ensuring each cat is well cared for until they find their forever home.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-handshake value-icon"></i>
            <h4>Community</h4>
            <p>We foster a community where everyone works together to make a positive impact in the lives of our feline friends.</p>
          </div>
        </div>
      </section>

      <section className="adoption-process-section">
        <h3 className="section-title">Our Adoption Process</h3>
        <p>Adopting a cat with us is easy and straightforward. Here’s how it works:</p>
        <ol className="adoption-process">
          <li><strong>Step 1:</strong> Browse our cats and find your perfect companion.</li>
          <li><strong>Step 2:</strong> Fill out the adoption form and submit it for review.</li>
          <li><strong>Step 3:</strong> We’ll schedule a meet-and-greet with your chosen cat.</li>
          <li><strong>Step 4:</strong> After a successful meet, we finalize the adoption and you can take your new cat home!</li>
        </ol>
      </section>

      <section className="gallery-section">
        <h3 className="section-title">Meet Our Cats</h3>
        <div className="gallery">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg" 
            alt="Cat 1" 
            className="gallery-image" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/800px-Gustav_chocolate.jpg" 
            alt="Cat 2" 
            className="gallery-image" 
          />
        
        </div>
      </section>

     
    </div>
  );
};

export default About;

