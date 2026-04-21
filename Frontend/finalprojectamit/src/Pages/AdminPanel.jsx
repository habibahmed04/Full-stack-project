import React, { useState, useEffect } from "react";
import api from "../api";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("reservations");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminBookings = async () => {
    try {
      const res = await api.get("/admin/bookings");
      setReservations(res.data);
    } catch (err) {
      alert("Failed to load admin bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminBookings();
  }, []);

  
  const updateBookingStatus = async (id, status) => {
  try {
    await api.put(`/admin/bookings/${id}/confirm`, { status });
    fetchAdminBookings(); 
  } catch (err) {
    console.error(err);
    alert("Failed to update booking");
  }
};

  const renderMainContent = () => {
    if (loading) {
      return <p style={{ padding: 20 }}>Loading bookings...</p>;
    }

    return (
      <div className="reservations-content">
        <h2>Table Reservations</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Guests</th>
              <th>Date & Time</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {reservations.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No bookings yet
                </td>
              </tr>
            )}

            {reservations.map((b) => (
              <tr key={b.id}>
                <td>#{b.id}</td>
                <td>{b.user_name}</td>
                <td>{b.party_size}</td>
                <td>{new Date(b.booking_time).toLocaleString()}</td>
                <td>{b.phone_number}</td>
                <td>
                  <span className={`status-badge ${b.status}`}>
                    {b.status.toUpperCase()}
                  </span>
                </td>
                <td>
                  {b.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateBookingStatus(b.id, "accepted")
                        }
                      >
                        ✓
                      </button>
                      <button
                        onClick={() =>
                          updateBookingStatus(b.id, "rejected")
                        }
                      >
                        ✕
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-main">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
