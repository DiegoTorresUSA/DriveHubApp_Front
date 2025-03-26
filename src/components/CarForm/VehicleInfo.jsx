// src/components/VehicleInfo.jsx
import React from 'react';

function VehicleInfo({ formData, onChange }) {
    return (
        <div className="border p-4 rounded-md mb-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-10">Información del Vehículo</h2>
            <div className="mb-8">
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Tipo de Vehículo</label>
                <select className="mt-2 block w-full p-3 border border-gray-300 rounded-md" name="vehicleType" value={formData.vehicleType} onChange={onChange}>
                    <option value="">Selecciona Tipo</option>
                    <option value="truck">Camioneta</option>
                    <option value="car">Carro</option>
                </select>
            </div>

            {/* Categoria Vehículo */}
            <div className="mb-8">
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Características</label>
                <select
                    className="mt-3 block w-full p-3 border border-gray-300 border-solid rounded-md"
                >
                    <option value="">Selecciona Característica</option>
                    <option value="electronics">Económico</option>
                    <option value="fashion">Estándar</option>
                    <option value="fashion">Premium</option>
                    <option value="fashion">De lujo</option>
                </select>
            </div>

            <div className="mb-8">
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Marca</label>
                <select className="mt-1 block w-full p-3 border border-gray-300 rounded-md" name="brand" value={formData.brand} onChange={onChange}>
                    <option value="">Selecciona Marca</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="toyota">Toyota</option>
                </select>
            </div>
            <div className={ "mb-8"}>
                <label className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2">Línea</label>
                <select className="mt-1 block w-full p-3 border border-gray-300 rounded-md" name="line" value={formData.line} onChange={onChange}>
                    <option value="">Selecciona Línea</option>
                    <option value="silverado">Silverado</option>
                    <option value="corolla">Corolla</option>
                </select>
            </div>
        </div>
    );
}

export default VehicleInfo;