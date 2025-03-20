import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setProduct({ ...product, images: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí enviarás el producto al backend o manejarás el guardado
        console.log('Producto agregado:', product);
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <label>
                Nombre del producto:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Descripción:
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Imágenes:
                <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageUpload}
                />
            </label>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};

export default AddProduct;
