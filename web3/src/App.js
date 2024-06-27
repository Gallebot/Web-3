import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Carrusel from './components/Carrusel';
import MainContent from './components/MainContent';
import './style.css';
import Productos from './components/Productos';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Register from './components/Register';
import AddProductWithPreview from './components/AddProductWithPreview';
import ProductDetails from './components/ProductDetails'; // Importa el nuevo componente
import UserManagement from './components/UserManagement'; // Importa UserManagement si aún no está

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Carrusel />
              <Productos />
              <MainContent />
            </>
          } />
          <Route path="/productos" element={<Productos />} />
          <Route path="/informatica" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-product" element={<AddProductWithPreview />} />
          <Route path="/products/:id" element={<ProductDetails />} /> {/* Nueva ruta */}
          <Route path="/user-management" element={<UserManagement />} /> {/* Ruta para UserManagement */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
