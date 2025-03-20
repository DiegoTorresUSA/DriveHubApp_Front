import React from 'react';

function ProductList() {
    const sampleCars = [
        {
            id: 1,
            name: "Toyota Corolla 2024",
            price: "$50/día",
            image: "https://placehold.co/300x200",
            location: "Ciudad de México",
            category: "Sedán"
        },
        {
            id: 2,
            name: "Honda CR-V 2023",
            price: "$65/día",
            image: "https://placehold.co/300x200",
            location: "Guadalajara",
            category: "SUV"
        },
        {
            id: 3,
            name: "Volkswagen Golf 2024",
            price: "$55/día",
            image: "https://placehold.co/300x200",
            location: "Monterrey",
            category: "Familiar"
        },
        // Más autos de muestra
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCars.map(car => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                {car.category}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                            <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            {car.location}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;