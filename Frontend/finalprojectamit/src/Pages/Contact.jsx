import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact(){
  return (
    <div className="container" style={{padding:'36px 0'}}>
      <h1>Contact Us</h1>
      <p className="muted">Call Us: +1-234-567-8900 | Hours: Mon-Fri 11am-8pm</p>

      <div className="contact-grid">
        <div>
          <ContactForm />
        </div>
        <div className="form-card">
          <h3>Visit Us</h3>
          <p className="muted">837 W. Marshall Lane, Los Angeles</p>
          <h4 className="kicker">Opening Hours</h4>
          <p className="muted">Mon-Fri: 11am - 8pm<br/>Sat, Sun: 9am - 10pm</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;