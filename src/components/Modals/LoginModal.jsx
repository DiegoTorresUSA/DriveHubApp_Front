import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaTimesCircle } from 'react-icons/fa';
import './LoginModal.css'; // Archivo CSS para estilos

const LoginModal = ({ isOpen, onClose }) => {
    const [credentials, setCredentials] = useState({ "email": '', "password": '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email === 'admin@drivehub.com' && credentials.password === 'password') {
            alert('Inicio de sesión exitoso');
            onClose(); // Cerrar modal si inicia sesión correctamente
        } else {
            alert('Credenciales incorrectas');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose} >
            <div className="modal-container-two-columns" onClick={(e) => e.stopPropagation()}>
                {/* Columna izquierda: Formulario */}
                <div className="login-form-container">
                    <h1 className="login-title">¡Bienvenido de nuevo!</h1>
                    <p className="login-subtitle">Ingresa tus datos para continuar.</p>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-icon">
                            <FaEnvelope className="icon-envelope" color="#888" size={18} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={credentials.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-icon">
                            <FaLock color="#888" size={18} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                value={credentials.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="login-options">
                            <a href="#" className="forgot-password">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button type="submit" className="login-button">
                            Iniciar sesión
                        </button>
                        <div className="google-login">
                            <button type="button" className="google-button">
                                <FaGoogle size={18} /> Iniciar sesión con Google
                            </button>
                        </div>
                    </form>
                    <p className="signup-text">
                        ¿No tienes una cuenta? <a href="#">Regístrate</a>
                    </p>
                </div>

                {/* Columna derecha: Imagen alusiva a vehículos */}
                <div className="login-image-container">
                    <img src="/src/assets/image-login2.jpg" alt="Vehículo de fondo" className="login-image" />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
