import React from "react";
import loadedFries from "../../assets/loaded_fries.png";
import eggs from "../../assets/eggs.png";
import fries from "../../assets/fries.png";
import pancakes from "../../assets/pancakes.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "60px 0 30px",
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#e8b959",
              }}
            >
              Bistro Bliss
            </div>
            <p
              style={{
                color: "#999",
                lineHeight: "1.6",
                fontSize: "15px",
                marginBottom: "20px",
              }}
            >
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
          </div>

          {/* Pages Column */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Pages
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "Home",
                "About",
                "Menu",
                "Pricing",
                "Blog",
                "Contact",
                "Delivery",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    style={{
                      color: "#999",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e8b959")}
                    onMouseLeave={(e) => (e.target.style.color = "#999")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Utility Pages
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "Start Here",
                "Styleguide",
                "Password Protected",
                "404 Not Found",
                "Licenses",
                "Changelog",
                "View More",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: "#999",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e8b959")}
                    onMouseLeave={(e) => (e.target.style.color = "#999")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Column - CORRECTED */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Follow Us On Instagram
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {/* Your actual Instagram images */}
              <img
                src={loadedFries}
                alt="Instagram 1"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <img
                src={fries}
                alt="Instagram 2"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <img
                src={eggs}
                alt="Instagram 3"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <img
                src={pancakes}
                alt="Instagram 4"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #333",
            paddingTop: "30px",
            textAlign: "center",
            color: "#999",
            fontSize: "14px",
          }}
        >
          Copyright © 2023 Hashing Developer. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
