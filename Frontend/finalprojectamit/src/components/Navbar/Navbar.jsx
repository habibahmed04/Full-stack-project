import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/japanese-food-1.png";

// Icons
import phoneIcon from "../../assets/Icon.png";
import gitIcon from "../../assets/logo-github 1.png";
import facebookIcon from "../../assets/logo-fb-simple 2.png";
import instagramIcon from "../../assets/logo-instagram 1.png";
import twitterIcon from "../../assets/logo-twitter 2.png";

function Navbar() {
  const navigate = useNavigate();

  
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "#2c2c2c",
          color: "white",
          padding: "8px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={phoneIcon} alt="Phone" width={16} />
          (414) 857-0107
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <img src={facebookIcon} alt="Facebook" width={18} />
          <img src={instagramIcon} alt="Instagram" width={18} />
          <img src={twitterIcon} alt="Twitter" width={18} />
          <img src={gitIcon} alt="GitHub" width={18} />
        </div>
      </div>

      {/* Main navbar */}
      <header className="navbar" style={{ backgroundColor: "white", padding: "0 50px" }}>
        <div
          className="navbar-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "15px 0",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={logo} alt="Bistro Bliss" height={40} />
            <strong style={{ color: "var(--brand)", fontSize: "20px" }}>
              Bistro Bliss
            </strong>
          </Link>

          {/* Navigation */}
          <nav style={{ display: "flex", gap: "25px" }}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Auth section */}
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Link to="/book">Book A Table</Link>

            {/*  NOT LOGGED IN */}
            {!token && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}

            {/*  LOGGED IN */}
            {token && (
              <>
                <Link to="/profile">Profile</Link>

                {/* ADMIN ONLY */}
                {user?.role === "admin" && (
                  <Link to="/admin">Admin</Link>
                )}

                <button
                  onClick={handleLogout}
                  style={{
                    border: "1px solid red",
                    color: "red",
                    padding: "6px 12px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
