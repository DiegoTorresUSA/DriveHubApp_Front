import React, {useState} from 'react';
import {FaEnvelope, FaGoogle, FaLock} from 'react-icons/fa';
import './AdminPanel.css';

const AdminPanel = () => {
    const [credentials, setCredentials] = useState({ "email": '', "password": '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email === 'admin@drivehub.com' && credentials.password === 'password') {
            alert('Inicio de sesión exitoso');
        } else {
            alert('Credenciales incorrectas');
        }
    };
    return (
        <div className="admin-panel">
            <form onSubmit={handleSubmit} className="admin-panel-form">
                <h1 className="login-title">Admin Login</h1>
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
            </form>
        </div>
    );
};

export default AdminPanel;