import React from 'react';
import './Main.css';


const Main = () => {
  return (
    <main className="main">
      <div className="search-container text-center mt-6">
      <h2 className="text-2xl md:text-3xl">
    Encuentra tu vehículo ideal
  </h2>
        <div className="search-wrapper">
        <input 
          type="text" 
          placeholder="¿Qué vehículo estás buscando?"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
          focus:outline-none mx-auto block search-input"
        />

        </div>
      </div>

      <div className="categories-container">
        <h2 className="text-3xl sm:text-4xl">Categorías</h2>
        <div className="categories-grid">
          <div className="category-item">SUV</div>
          <div className="category-item">Sedán</div>
          <div className="category-item">Deportivo</div>
          <div className="category-item">Familiar</div>
        </div>
      </div>

      <div className="recommendations-container">
        <h2>Recomendaciones</h2>
        <div className="recommendations-grid">
          <div className="product-card">Toyota Corolla 2023</div>
          <div className="product-card">Honda CR-V 2023</div>
          <div className="product-card">Mazda 3 2023</div>
        </div>
      </div>
    </main>
  );
};

export default Main;