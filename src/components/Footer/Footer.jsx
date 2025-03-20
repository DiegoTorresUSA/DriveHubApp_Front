import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">DriveHub</h3>
                        <p className="text-gray-300">Donde cada viaje comienza.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <p className="text-gray-300">Email: info@drivehub.com</p>
                        <p className="text-gray-300">Tel: (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} DriveHub. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;