import React from 'react';


function Specifications({ formData, onChange }) {
    return (
        <div className="border p-4 rounded-md mb-4">
            <h2 className="text-2xl mb-10">Especificaciones</h2>
            {/* Tipo gasolina Vehículo */}
            <div className="mb-8">
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Tipo Gasolina</label>
                <select
                    className="mt-3 block w-full p-3 border border-gray-300 border-solid rounded-md"
                >
                    <option value="">Selecciona Tipo Gasolina</option>
                    <option value="electronics">Gasolina</option>
                    <option value="fashion">Diésel</option>
                    <option value="fashion">Gas natural</option>
                    <option value="fashion">Eléctrico</option>
                    <option value="fashion">Híbrido</option>
                </select>
            </div>

            {/* Transimision Vehículo */}
            <div>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Tipo Transmisión</label>
                <select
                    className="mt-3 block w-full p-3 border border-gray-300 border-solid rounded-md"
                >
                    <option value="">Selecciona Transmisión</option>
                    <option value="electronics">Automática</option>
                    <option value="fashion">Manual</option>
                    <option value="fashion">Semiautomática</option>
                </select>
            </div>
        </div>
    );
}

export default Specifications;