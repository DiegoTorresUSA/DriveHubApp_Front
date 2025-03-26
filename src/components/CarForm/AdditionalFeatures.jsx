import React from 'react';


function AdditionalFeatures({ formData, onChange }) {
    return (
        <div className="border p-4 rounded-md mb-4">
            <h2 className="text-2xl font-semibold mb-10">Características Adicionales</h2>

            {/* Color Vehículo */}
            <div>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Color Vehículo</label>
                <select
                    className="mt-3 block w-full p-2 border border-gray-300 border-solid"
                >
                    <option value="">Selecciona Color</option>
                    <option value="electronics">Blanco</option>
                    <option value="fashion">Negro</option>
                    <option value="fashion">Azúl</option>
                    <option value="fashion">Rojo</option>
                </select>
            </div>

            {/* pasajeros Vehículo */}
            <div>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Cantidad Pasajeros</label>
                <input
                    type="number"
                    className="mt-3 block w-full p-2 border border-gray-300 border-solid"
                    placeholder="Ej: 4"
                />
            </div>


            {/* Aire Acondicionado Vehículo */}
            <div>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Aire Acondicionado</label>
                <select
                    className="mt-3 block w-full p-2 border border-gray-300 border-solid"
                >
                    <option value="">Selecciona</option>
                    <option value="electronics">Si</option>
                    <option value="fashion">No</option>
                </select>
            </div>

            {/* valijas Vehículo */}
            <div>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Cantidad Valijas</label>
                <input
                    type="number"
                    className="mt-3 block w-full p-2 border border-gray-300 border-solid"
                    placeholder="Ej: 4"
                />
            </div>

        </div>
    );
}

export default AdditionalFeatures;