/*import React, { useState } from 'react';*/
import { FaPlusCircle, FaList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import Carform from '../CarForm/Carform.jsx';

const AddProduct = () => {
    /*const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };*/

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex ">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg border-r flex flex-col justify-between"
                   style={{
                       borderImage: 'linear-gradient(to bottom, #007bff, #6610f2) 1',
                       borderImageSlice: 1,
                   }}>
                {/* Logo y menú */}
                <div>
                    {/* Logo */}
                    <div className="flex flex-col items-center p-4 border-b" style={{
                        borderBottom: '1px solid #007bff',
                    }}>
                        <img src="/logo.png" alt="DriveHub Logo" className="h-12 mb-2" />
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">DriveHub</h1>
                        <span className="text-gray-500 text-xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Admin Panel</span>
                    </div>
                    {/* Menu */}
                    <nav className="mt-6 space-y-4">
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-sm">
                            <FaPlusCircle size={20} />
                            <span>Agregar Productos</span>
                        </button>
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-sm">
                            <FaList size={20} />
                            <span>Listar Productos</span>
                        </button>
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-sm">
                            <FaShoppingCart size={20} />
                            <span>Pedidos</span>
                        </button>
                    </nav>
                </div>
                {/* Botón "Salir" */}
                <div className="mt-6 space-y-4" style={{
                    borderTop: '1px solid #007bff',
                }}>
                    <button className="w-full flex items-center pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-sm">
                        <FaSignOutAlt className="mr-2" />
                        Salir
                    </button>
                </div>
            </aside>



            {/* Main Section */}
            <main className="flex-1 p-0 flex">
                <form className="bg-white py-20 px-16 shadow-md w-full">
                    {/* Image Upload Boxes */}
                    <div>
                        <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Imágenes del Vehículo</label>
                        <div className="grid grid-cols-5 gap-2 w-fit"> {/* Sin espacio entre columnas ni padding */}
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className="border border-dashed border-gray-400 rounded-none flex items-center justify-center cursor-pointer hover:border-blue-500 transition m-0"
                                    onClick={() => document.getElementById(`fileInput-${index}`).click()}
                                    style={{
                                        height: "80px", // Tamaño compacto
                                        width: "80px", // Tamaño compacto
                                    }}
                                >
                                    <span className="text-blue-500 text-xl">
                                      <i className="fas fa-cloud-upload-alt"></i> {/* Ícono de nube centrado */}
                                    </span>
                                    <input
                                        id={`fileInput-${index}`}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                        <Carform />
                </form>
            </main>
        </div>
    );
};

export default AddProduct;
