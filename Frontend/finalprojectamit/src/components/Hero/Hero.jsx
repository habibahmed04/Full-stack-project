import React from 'react';
import './Hero.css';
import hero from '../../assets/homepagebackground.png';

function Hero(){
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-kicker">Fastest Food Delivery in City</div>
          <h1 className="hero-title">Best food for your taste — delivered fast & fresh</h1>
          <p className="hero-sub">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven. Delivery within 30 minutes.</p>
          <div className="hero-ctas">
            <a href="/menu" className="btn btn-primary">Explore Menu</a>
            <a href="/book" className="btn btn-ghost">Book A Table</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero visual" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
