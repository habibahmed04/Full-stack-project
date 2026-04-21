import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Delivery from './Pages/Delivery';
import BookTable from './Pages/BookTable';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import AdminPanel from './Pages/AdminPanel';

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/book" element={<BookTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected USER route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Protected ADMIN route */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
