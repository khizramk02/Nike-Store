import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ShoeContextProvider from '../context/ShoeContext';
import ShoeDetail from './ShoeDetail';
import Footer from './Footer';
import Toastify from './Toastify';

const Routing = () => {
  return (
    <Router>
      <Toastify />
      <ShoeContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/nike-shoe/:id' element={<ShoeDetail />} />
        </Routes>
        <Footer />
      </ShoeContextProvider>
    </Router>
  );
};

export default Routing;
