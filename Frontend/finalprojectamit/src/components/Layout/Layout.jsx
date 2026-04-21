import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout({children}){
  return (
    <div className="app-root">
      <Navbar />
      <main style={{minHeight:'70vh'}}>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
