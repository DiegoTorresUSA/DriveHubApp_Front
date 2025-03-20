import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import {Link} from "react-router-dom";
import LoginModal from "../Modals/LoginModal.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const openModal = () => setIsModalOpen(true); // Abre el modal
  const closeModal = () => setIsModalOpen(false); // Cierra el modal

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img src="/logo.png" alt="DriveHub Logo" className="h-10 sm:h-12 mr-2 sm:mr-3 transition-transform group-hover:scale-105" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">DriveHub</h1>
                <p className="text-sm sm:text-base text-blue-100">Donde cada viaje comienza</p>
              </div>
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
            aria-label="Menú principal"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>

          {/* Navegación en escritorio (visible desde lg) */}
          <nav className={`hidden lg:flex items-center space-x-8`}>
            <Link to="/vehiculos" className="text-xl text-blue-100 hover:text-white transition-colors">
              Vehículos
            </Link>
            <Link to="/categorias" className="text-xl text-blue-100 hover:text-white transition-colors">
              Categorías
            </Link>
            <Link to="/nosotros" className="text-xl text-blue-100 hover:text-white transition-colors">
              Nosotros
            </Link>
          </nav>

          {/* Botones de sesión en escritorio (visible desde lg) */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
                onClick={openModal} // Llamada al abrir modal
                className="text-xl text-blue-100 hover:text-white"
            >
              Iniciar sesión
            </button>
            <Link
                to="/crear-cuenta"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors font-semibold whitespace-nowrap text-xl"
            >
              Crear cuenta
            </Link>
          </div>
        </div>

        {/* Modal de Inicio de Sesión */}
        <LoginModal isOpen={isModalOpen} onClose={closeModal} />

        {/* Menú móvil con animaciones (visible hasta lg) */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4 transform transition-transform duration-300 ease-in-out">
            <Link
                to="/vehiculos"
                className="text-lg text-blue-100 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
            >
              Vehículos
            </Link>
            <Link
                to="/categorias"
                className="text-lg text-blue-100 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
            >
              Categorías
            </Link>
            <Link
                to="/nosotros"
                className="text-lg text-blue-100 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
            >
              Nosotros
            </Link>
            <div className="pt-4 flex flex-col space-y-4">
              <Link
                  to="/iniciar-sesion"
                  className="text-lg text-blue-100 hover:text-white transition-colors text-center hover:translate-x-2 transform duration-200"
              >
                Iniciar sesión
              </Link>
              <Link
                  to="/crear-cuenta"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-center hover:shadow-lg text-lg"
              >
                Crear cuenta
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
