import React from "react";
import { MENU } from "../api/mockData";
import sample from "../assets/homepagebackground.png";
import shawarmaImg from "../assets/shawerma.png"; // <-- replace with your actual path
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      {/* Hero Section matching your image */}
      <section
        style={{
          backgroundImage: `url(${sample})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navigation Bar
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 50px',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
            Bistro Bliss
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            {['Home', 'About', 'Menu', 'Pages', 'Contact'].map(item => (
              <a key={item} href={`/${item.toLowerCase()}`} style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px'
              }}>
                {item}
              </a>
            ))}
            <a href="/book" style={{
              backgroundColor: '#e8b959',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Book A Table
            </a>
          </div>
        </nav> */}

        {/* Hero Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            padding: "0 20px",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Best food for your taste
          </h1>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "30px",
              maxWidth: "500px",
            }}
          >
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="/book"
              style={{
                backgroundColor: "#e8b959",
                color: "white",
                padding: "12px 30px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Book A Table
            </a>
            <a
              href="/menu"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "12px 30px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section
      <section className="container" style={{ padding: '60px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <div style={{
              color: '#e8b959',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Browse Our Menu
            </div>
            <h2 style={{ margin: '8px 0', fontSize: '32px' }}>Best food for your taste</h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '400px' }}>
              Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
            </p>
          </div>
          <div>
            <a href="/menu" style={{
              backgroundColor: '#e8b959',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Explore Menu
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {MENU.map(item => (
            <div key={item.id} style={{
              border: '1px solid #eee',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <img 
                src={sample} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: '0', fontSize: '18px' }}>{item.title}</h4>
                  <div style={{ color: '#e8b959', fontWeight: 'bold', fontSize: '18px' }}>{item.price}</div>
                </div>
                <p style={{ color: '#666', margin: '10px 0', fontSize: '14px' }}>{item.desc}</p>
                <div style={{ marginTop: '15px' }}>
                  <a href="/book" style={{
                    border: '2px solid #e8b959',
                    color: '#e8b959',
                    padding: '8px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          padding: "60px 0",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Image */}
        <div style={{ flex: "1", position: "relative" }}>
          <img
            src={shawarmaImg}
            alt="shawarma"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Contact Card */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "12px",
              padding: "40px",
              width: "380px",
              boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                marginBottom: "25px",
                fontSize: "26px",
                fontWeight: "600",
              }}
            >
              Come and visit us
            </h2>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "18px",
                fontSize: "18px",
              }}
            >
              <span style={{ marginRight: "12px" }}>📞</span>
              (414) 857 – 0107
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "18px",
                fontSize: "18px",
              }}
            >
              <span style={{ marginRight: "12px" }}>✉️</span>
              happytummy@restaurant.com
            </div>

            {/* Address */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                lineHeight: "1.4",
              }}
            >
              <span style={{ marginRight: "12px" }}>📍</span>
              837 W. Marshall Lane Marshalltown,
              <br />
              IA 50158, Los Angeles
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div
          style={{
            flex: "1",
            padding: "80px 70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            We provide healthy
            <br />
            food for your family.
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              marginBottom: "30px",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              marginBottom: "45px",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          {/* Button */}
          <button
            style={{
              padding: "15px 36px",
              border: "2px solid #000",
              borderRadius: "40px",
              backgroundColor: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <Link className="nav-link" to="/about">
              More About Us
            </Link>
          </button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        className="container"
        style={{ padding: "60px 0", backgroundColor: "#f8f8f8" }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "40px",
          }}
        >
          What Our Customers Say
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Testimonial Card 1 */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontSize: "20px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              "The best restaurant"
            </h4>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div
              style={{
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                Sophie Robson
              </div>
              <div
                style={{
                  color: "#e8b959",
                  fontSize: "14px",
                }}
              >
                Los Angeles, CA
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontSize: "20px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              "Simply delicious"
            </h4>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>
            <div
              style={{
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                Matt Cannon
              </div>
              <div
                style={{
                  color: "#e8b959",
                  fontSize: "14px",
                }}
              >
                San Diego, CA
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontSize: "20px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              "One of a kind restaurant"
            </h4>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div
              style={{
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                Andy Smith
              </div>
              <div
                style={{
                  color: "#e8b959",
                  fontSize: "14px",
                }}
              >
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
