import React, { useState } from 'react';
import { FaPlusCircle, FaList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

const AddProduct = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg border-r border-gray-300 flex flex-col justify-between">
                {/* Logo y menú */}
                <div>
                    {/* Logo */}
                    <div className="flex flex-col items-center p-4 border-b border-gray-300">
                        <img src="/logo.png" alt="DriveHub Logo" className="h-12 mb-2" />
                        <h1 className="text-xl font-bold">DriveHub</h1>
                        <span className="text-gray-500 text-sm mt-1">Admin Panel</span>
                    </div>
                    {/* Menu */}
                    <nav className="mt-6 space-y-4">
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-md">
                            <FaPlusCircle size={20} />
                            <span>Agregar Productos</span>
                        </button>
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-md">
                            <FaList size={20} />
                            <span>Listar Productos</span>
                        </button>
                        <button className="w-full flex items-center space-x-4 pl-4 py-3 text-gray-700 text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition rounded-md">
                            <FaShoppingCart size={20} />
                            <span>Pedidos</span>
                        </button>
                    </nav>
                </div>
                {/* Botón "Salir" */}
                <div className="p-4 border-t border-gray-300">
                    <button className="w-full flex items-center text-gray-700 text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
                        <FaSignOutAlt className="mr-2" />
                        Salir
                    </button>
                </div>
            </aside>



            {/* Main Section */}
            <main className="flex-1 ml-64 p-8 flex items-center justify-center">
                <form className="bg-white py-12 px-10 rounded-lg shadow-md w-full max-w-5xl min-h-[700px]">
                    {/* Image Upload Boxes */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Imágenes del producto</label>
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





                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del producto</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ej: Smartphone"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descripción del producto</label>
                        <textarea
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            rows="3"
                            placeholder="Escribe una descripción detallada"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Categoría</label>
                            <select
                                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Seleccionar categoría</option>
                                <option value="electronics">Electrónica</option>
                                <option value="fashion">Moda</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subcategoría</label>
                            <select
                                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Seleccionar subcategoría</option>
                                <option value="smartphones">Smartphones</option>
                                <option value="laptops">Laptops</option>
                            </select>
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                            type="number"
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ej: 50000"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Guardar Producto
                    </button>
                </form>
            </main>
        </div>
    );
};

export default AddProduct;
