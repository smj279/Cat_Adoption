import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container container mt-5">
      <h2 className="contact-header">Contact Us</h2>
      <p className="contact-description">
        We’d love to hear from you! Whether you have a question, feedback, or want to get involved, reach out to us below.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
      </form>

      <div className="google-signup mt-5">
        <p className="sign-up-text">Or sign up with:</p>
        <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-google">
            Sign Up with Google
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;


