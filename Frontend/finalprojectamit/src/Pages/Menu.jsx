import React, { useState, useEffect } from "react";
import api from "../api";

function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const user = JSON.parse(localStorage.getItem("user"));

  // ADMIN STATES
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Main Dishes");
  const [description, setDescription] = useState("");

  const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

  // FETCH MENU
  const fetchMenu = async () => {
    try {
      const res = await api.get("/menu");
      setMenu(res.data);
    } catch {
      alert("Failed to load menu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // FILTER
  const filteredMenu =
    activeCategory === "All"
      ? menu
      : menu.filter(
          (item) =>
            item.category &&
            item.category.trim().toLowerCase() ===
              activeCategory.trim().toLowerCase()
        );

  // ADD
  const handleAdd = async () => {
    try {
      await api.post("/admin/menu-items", {
        name,
        price,
        category,
        description,
      });

      resetForm();
      fetchMenu();
    } catch {
      alert("Failed to add item");
    }
  };

  // EDIT CLICK
  const handleEdit = (item) => {
    setEditingItem(item);
    setName(item.name);
    setPrice(item.price);
    setCategory(item.category);
    setDescription(item.description || "");
    setShowForm(true);
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      await api.put(`/admin/menu-items/${editingItem.id}`, {
        name,
        price,
        category,
        description,
      });

      resetForm();
      fetchMenu();
    } catch {
      alert("Failed to update item");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/menu-items/${id}`);
      fetchMenu();
    } catch {
      alert("Failed to delete");
    }
  };

  // RESET
  const resetForm = () => {
    setName("");
    setPrice("");
    setCategory("Main Dishes");
    setDescription("");
    setEditingItem(null);
    setShowForm(false);
  };

  if (loading) {
    return <p style={{ textAlign: "center", padding: 60 }}>Loading menu...</p>;
  }

  return (
    <div style={{ padding: "60px 24px", background: "#fafafa" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700 }}>Our Menu</h1>
        </div>

        {/* ADMIN BUTTON */}
        {user?.role === "admin" && (
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button onClick={() => setShowForm(!showForm)}>
              ➕ Add Menu Item
            </button>
          </div>
        )}

        {/* FORM */}
        {showForm && (
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Breakfast</option>
              <option>Main Dishes</option>
              <option>Drinks</option>
              <option>Desserts</option>
            </select>

            <button onClick={editingItem ? handleUpdate : handleAdd}>
              {editingItem ? "Update" : "Save"}
            </button>
          </div>
        )}

        {/* CATEGORIES */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginTop: 40,
          }}
        >
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: 20,
              }}
            >
              <h4>{item.name}</h4>

              <p style={{ color: "#777", margin: "8px 0" }}>
                {item.description}
              </p>

              <p>${item.price}</p>

              {/* ADMIN CONTROLS */}
              {user?.role === "admin" && (
                <>
                  <button onClick={() => handleEdit(item)}>✏️ Edit</button>

                  <button
                    style={{ color: "red", marginLeft: 10 }}
                    onClick={() => handleDelete(item.id)}
                  >
                    ❌ Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

