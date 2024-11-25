import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        weight: "",
        price: "",
        image: ""
    });
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE"
        });
        fetchProducts();
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setNewProduct(product);
    };

    const handleSave = async () => {
        if (editProduct) {
            await fetch(`http://localhost:8080/products/${editProduct.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
        } else {
            await fetch("http://localhost:8080/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
        }
        setEditProduct(null);
        setNewProduct({
            id: "",
            name: "",
            weight: "",
            price: "",
            image: ""
        });
        fetchProducts();
    };

    return (
        <>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        {/* <img src={product.image} alt={product.name} /> */}
                        <p>Name: {product.name}</p>
                        <p>Weight: {product.weight}</p>
                        <p>Price: {product.price}</p>
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
            {editProduct && (
                <div>
                    <input type="text" value={newProduct.id} onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })} placeholder="ID" />
                    <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="Name" />
                    <input type="text" value={newProduct.weight} onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })} placeholder="Weight" />
                    <input type="text" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="Price" />
                    <input type="text" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} placeholder="Image URL" />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </>
    );
};

export default Products;
