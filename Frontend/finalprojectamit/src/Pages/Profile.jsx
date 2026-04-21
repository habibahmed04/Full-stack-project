import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const user = JSON.parse(localStorage.getItem("user"));
const Profile = () => {
  // User profile data state
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    dietaryPreferences: ["Vegetarian", "No Nuts"],
    favoriteCuisines: ["Italian", "Japanese"],
    newsletterSubscription: true,
    specialOffers: true,
    profileImage: null,
  });

  // Editable state
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...profileData });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData(editedData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Mock reservation history
  const reservationHistory = [
    {
      id: 1,
      date: "2024-01-15",
      time: "19:00",
      guests: 4,
      table: "Window 5",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-01-20",
      time: "20:30",
      guests: 2,
      table: "Booth 3",
      status: "Upcoming",
    },
    {
      id: 3,
      date: "2024-01-10",
      time: "18:00",
      guests: 6,
      table: "Private 1",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-01-25",
      time: "19:30",
      guests: 3,
      table: "Bar 2",
      status: "Cancelled",
    },
  ];

  // Mock favorite dishes
  const favoriteDishes = [
    { id: 1, name: "Truffle Pasta", category: "Main Course", rating: 5 },
    { id: 2, name: "Matcha Cheesecake", category: "Dessert", rating: 5 },
    { id: 3, name: "Salmon Sushi", category: "Appetizer", rating: 4 },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information and preferences</p>
      </div>

      <div className="profile-content">
        {/* Left Column - Profile Info */}
        <div className="profile-left-column">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>Personal Information</h2>
              {!isEditing && (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
            </div>

            <div className="profile-info">
              {/* Profile Image */}
              <div className="profile-image-section">
                <div className="profile-image-container">
                  {editedData.profileImage ? (
                    <img
                      src={editedData.profileImage}
                      alt="Profile"
                      className="profile-image"
                    />
                  ) : (
                    <div className="profile-image-placeholder">
                      {editedData.firstName.charAt(0)}
                      {editedData.lastName.charAt(0)}
                    </div>
                  )}
                  {isEditing && (
                    <label className="image-upload-label">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="image-upload-input"
                      />
                      <span className="upload-text">Change Photo</span>
                    </label>
                  )}
                </div>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstName"
                        value={editedData.firstName}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.firstName}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastName"
                        value={editedData.lastName}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.lastName}
                      </div>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label>Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.email}
                      </div>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={editedData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.phone}
                      </div>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label>Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={editedData.address}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.address}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="city"
                        value={editedData.city}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.city}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>State</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="state"
                        value={editedData.state}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.state}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>ZIP Code</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="zipCode"
                        value={editedData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.zipCode}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Country</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={editedData.country}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    ) : (
                      <div className="profile-field-value">
                        {profileData.country}
                      </div>
                    )}
                  </div>
                </div>

                {/* Preferences */}
                <div className="preferences-section">
                  <h3>Preferences</h3>
                  <div className="preferences-grid">
                    <div className="preference-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="newsletterSubscription"
                          checked={
                            isEditing
                              ? editedData.newsletterSubscription
                              : profileData.newsletterSubscription
                          }
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                        <span>Newsletter Subscription</span>
                      </label>
                    </div>
                    <div className="preference-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="specialOffers"
                          checked={
                            isEditing
                              ? editedData.specialOffers
                              : profileData.specialOffers
                          }
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                        <span>Special Offers & Promotions</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Edit Mode Buttons */}
                {isEditing && (
                  <div className="edit-buttons">
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="actions-card">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <Link to="/book" className="action-btn book-btn">
                <span className="action-icon">📅</span>
                Book a Table
              </Link>
              <Link to="/menu" className="action-btn menu-btn">
                <span className="action-icon">🍽️</span>
                View Menu
              </Link>
              <Link to="/orders" className="action-btn orders-btn">
                <span className="action-icon">📦</span>
                My Orders
              </Link>
              <Link to="/rewards" className="action-btn rewards-btn">
                <span className="action-icon">⭐</span>
                Rewards
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Activity */}
        <div className="profile-right-column">
          {/* Reservation History */}
          <div className="activity-card">
            <div className="activity-header">
              <h3>Reservation History</h3>
              <Link to="/reservations" className="view-all-link">
                View All
              </Link>
            </div>
            <div className="reservations-list">
              {reservationHistory.map((reservation) => (
                <div
                  key={reservation.id}
                  className={`reservation-item ${reservation.status.toLowerCase()}`}
                >
                  <div className="reservation-info">
                    <div className="reservation-date">
                      <span className="date">{reservation.date}</span>
                      <span className="time">{reservation.time}</span>
                    </div>
                    <div className="reservation-details">
                      <span className="guests">
                        {reservation.guests} guests
                      </span>
                      <span className="table">Table {reservation.table}</span>
                    </div>
                  </div>
                  <div
                    className={`reservation-status ${reservation.status.toLowerCase()}`}
                  >
                    {reservation.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Dishes */}
          <div className="activity-card">
            <div className="activity-header">
              <h3>Favorite Dishes</h3>
              <Link to="/favorites" className="view-all-link">
                View All
              </Link>
            </div>
            <div className="favorites-list">
              {favoriteDishes.map((dish) => (
                <div key={dish.id} className="favorite-item">
                  <div className="dish-info">
                    <h4>{dish.name}</h4>
                    <p className="dish-category">{dish.category}</p>
                  </div>
                  <div className="dish-rating">
                    {"★".repeat(dish.rating)}
                    {"☆".repeat(5 - dish.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="activity-card">
            <div className="activity-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">📱</div>
                <div className="activity-content">
                  <p>You booked a table for 4 people</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">⭐</div>
                <div className="activity-content">
                  <p>You earned 50 loyalty points</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🍝</div>
                <div className="activity-content">
                  <p>You reviewed "Truffle Pasta"</p>
                  <span className="activity-time">3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="stats-card">
            <h3>Your Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">12</div>
                <div className="stat-label">Visits</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">Favorites</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">250</div>
                <div className="stat-label">Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
