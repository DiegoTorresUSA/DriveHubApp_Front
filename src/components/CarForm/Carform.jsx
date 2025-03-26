import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VehicleInfo from './VehicleInfo.jsx';
import Specifications from './Specifications.jsx';
import AdditionalFeatures from './AdditionalFeatures.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Carform() {
  const [formData, setFormData] = useState({
    vehicleType: '',
    marca: '',
    linea: '',
    Caracteristicas: '',
    TipoGasolina: '',
    transmision: '',
    color: '',
    CapacidadPasajeros: '',
    AireAcondicionado: '',
    valijas: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Aquí puedes enviar los datos del formulario
  };

  return (
    <div> {/* Contenedor padre para el motion.div y el botón */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs className="w-full">
          <TabList className="flex py-14 justify-between border-b ">
            <Tab className="flex-1 text-center py-1 cursor-pointer focus:outline-none focus:ring-2 border-b-2 border-transparent hover:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2 text-2xl">Información del Vehículo</Tab>
            <Tab className="flex-1 text-center py-1 cursor-pointer focus:outline-none focus:ring-2 border-b-2 border-transparent hover:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2 text-2xl">Características Adicionales</Tab>
            <Tab className="flex-1 text-center py-1 cursor-pointer focus:outline-none focus:ring-2 border-b-2 border-transparent hover:border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-2 text-2xl">Especificaciones</Tab>
          </TabList>
          <TabPanel>
            <VehicleInfo formData={formData} onChange={handleInputChange} />
          </TabPanel>
          <TabPanel>
            <AdditionalFeatures formData={formData} onChange={handleInputChange} />
          </TabPanel>
          <TabPanel>
            <Specifications formData={formData} onChange={handleInputChange} />
          </TabPanel>
        </Tabs>
      </motion.div>
      {/* Botón fuera del motion.div */}
      <div className="flex justify-center mt-12">
        <button
          type="submit"
          className="w-fit bg-gradient-to-r from-blue-600 to-blue-900 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 transition"
        >
          Guardar Registro
        </button>
      </div>
    </div>
  );
}

export default Carform;