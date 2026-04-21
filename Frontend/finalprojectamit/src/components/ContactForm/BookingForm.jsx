import React, { useState } from "react";
import api from "../../api"; // axios instance

function BookingForm() {
  const [data, setData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: 1,
    email: "",
  });

  const [loading, setLoading] = useState(false);

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();

    // Combine date + time for backend
    const booking_time = `${data.date} ${data.time}:00`;

    setLoading(true);

    try {
      await api.post("/book-table", {
        party_size: data.persons,
        booking_time,
        user_name: data.name,
        user_email: data.email,
        phone_number: data.phone,
      });

      alert("✅ Booking request sent successfully!");

      // Clear form
      setData({
        date: "",
        time: "",
        name: "",
        phone: "",
        persons: 1,
        email: "",
      });
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message ||
            "❌ Booking failed. Please check your data."
        );
      } else {
        alert("❌ Server error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input
          className="input"
          name="date"
          type="date"
          value={data.date}
          onChange={onChange}
          required
        />
        <input
          className="input"
          name="time"
          type="time"
          value={data.time}
          onChange={onChange}
          required
        />
      </div>

      <input
        className="input"
        name="name"
        placeholder="Enter your name"
        style={{ marginTop: 12 }}
        value={data.name}
        onChange={onChange}
        required
      />

      <input
        className="input"
        name="phone"
        placeholder="Phone number"
        style={{ marginTop: 12 }}
        value={data.phone}
        onChange={onChange}
        required
      />

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <input
          className="input"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={onChange}
          required
        />
        <input
          className="input"
          name="persons"
          type="number"
          min="1"
          style={{ width: 120 }}
          value={data.persons}
          onChange={onChange}
          required
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book A Table"}
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
