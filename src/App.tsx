import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import OneGenderProducts from './pages/OneGenderProducts';
import NotFound from './components/NotFound';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<OneGenderProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
