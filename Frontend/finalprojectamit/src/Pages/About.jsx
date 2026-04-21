// // import React from 'react';
// // import chef from '../assets/chef.png';

// // function About(){
// //   return (
// //     <div className="container" style={{padding:'36px 0'}}>
// //       <div style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:28}}>
// //         <div>
// //           <h1>Our story</h1>
// //           <p className="muted">We provide healthy food for your family. Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
// //           <h3>Why choose us</h3>
// //           <ul className="muted">
// //             <li>Delivery within 30 minutes</li>
// //             <li>Best offers & prices</li>
// //             <li>Online services available</li>
// //             <li>Catering & events</li>
// //           </ul>
// //         </div>
// //         <div>
// //           <div className="card">
// //             <img src={chef} alt="chef" style={{width:'100%',height:220,objectFit:'cover'}}/>
// //             <div style={{padding:16}}>
// //               <h3>Come and visit us</h3>
// //               <p className="muted">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
// //               <p className="muted">Call: (414) 857-0107</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default About;

// import React from 'react';
// import chef from '../assets/chef.png';
// import infoImg from '../assets/about-info.jpg';
// import './About.css';

// function About() {
//   return (
//     <div className="about-container">

//       {/* ================= FIRST SECTION ================= */}
//       <div className="about-grid">
//         <div className="about-text">
//           <span className="about-tag">About Our Restaurant</span>
//           <h1>Our Story</h1>

//           <p className="muted">
//             We provide healthy food for your family. Our story began with a vision to create a unique dining
//             experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's
//             rich culinary culture, we aim to honor our local roots while infusing a global palate.
//           </p>

//           <h3>Why choose us</h3>

//           <div className="why-grid">
//             {[
//               'Delivery within 30 minutes',
//               'Best offers & prices',
//               'Online services available',
//               'Catering & events'
//             ].map((item, index) => (
//               <div key={index} className="why-card">
//                 <span>✓</span> {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="visit-card">
//           <img src={chef} alt="chef" />
//           <div className="visit-info">
//             <h3>Come and visit us</h3>
//             <p className="muted">
//               837 W. Marshall Lane <br />
//               Marshalltown, IA 50158, Los Angeles
//             </p>
//             <p className="muted strong">Call: (414) 857-0107</p>
//           </div>
//         </div>
//       </div>

//       {/* ================= INFO / STATS SECTION ================= */}
//       <div className="info-grid">
//         <div>
//           <h2>A little information for our valuable guest</h2>

//           <p className="muted info-text">
//             At place, we believe that dining is not just about food, but also about the overall experience.
//             Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
//           </p>

//           <div className="stats-grid">
//             {[
//               { value: '3', label: 'Locations' },
//               { value: '1995', label: 'Founded' },
//               { value: '65+', label: 'Staff Members' },
//               { value: '100%', label: 'Satisfied Customers' }
//             ].map((item, index) => (
//               <div key={index} className="stat-card">
//                 <h2>{item.value}</h2>
//                 <p className="muted">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <img src={infoImg} alt="fine dining" className="info-img" />
//         </div>
//       </div>
//     </div>
//   );

// }

// export default About;
import React from "react";
import chef from "../assets/chef.png";
import infoImg from "../assets/about-info.jpg";
import "./About.css";

function About() {
  return (
    <div>
      {/* ================= FIRST SECTION ================= */}
      <section className="about-container">
        <div className="about-grid">
          <div className="about-text">
            <span className="about-tag">About Our Restaurant</span>
            <h1>Our Story</h1>
            <p className="muted">
              We provide healthy food for your family. Our story began with a
              vision to create a unique dining experience that merges fine
              dining, exceptional service, and a vibrant ambiance. Rooted in the
              city's rich culinary culture, we aim to honor our local roots
              while infusing a global palate.
            </p>
            <h3>Why choose us</h3>

            <div className="why-grid">
              {[
                "Delivery within 30 minutes",
                "Best offers & prices",
                "Online services available",
                "Catering & events",
              ].map((item, index) => (
                <div key={index} className="why-card">
                  <span>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="visit-card">
            <img src={chef} alt="chef" />
            <div className="visit-info">
              <h3>Come and visit us</h3>
              <p className="muted">
                837 W. Marshall Lane <br />
                Marshalltown, IA 50158, Los Angeles
              </p>
              <p className="muted strong">Call: (414) 857-0107</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO / STATS SECTION ================= */}
      <section className="info-grid">
        <div className="info-text-section">
          <h2>A little information for our valuable guest</h2>
          <p className="muted info-text">
            At our place, we believe that dining is not just about food, but
            also about the overall experience. Our staff, renowned for their
            warmth and dedication, strives to make every visit an unforgettable
            event.
          </p>

          <div className="stats-grid">
            {[
              { value: "3", label: "Locations" },
              { value: "1995", label: "Founded" },
              { value: "65+", label: "Staff Members" },
              { value: "100%", label: "Satisfied Customers" },
            ].map((item, index) => (
              <div key={index} className="stat-card">
                <h2>{item.value}</h2>
                <p className="muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="info-img-container">
          <img src={infoImg} alt="fine dining" className="info-img" />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonial-section">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-grid">
          {[
            {
              title: "The best restaurant",
              text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
              name: "Sophie Robson",
              location: "Los Angeles, CA",
            },
            {
              title: "Simply delicious",
              text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
              name: "Matt Cannon",
              location: "San Diego, CA",
            },
            {
              title: "One of a kind restaurant",
              text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
              name: "Andy Smith",
              location: "San Francisco, CA",
            },
          ].map((item, index) => (
            <div key={index} className="testimonial-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <div className="testimonial-author">
                <div className="name">{item.name}</div>
                <div className="location">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
