import React, { useEffect, useState } from "react";

const AdminMaintenanceModal = (props) => {
    const [products, setProducts] = useState([]);
    const [howTos, setHowTos] = useState([]);
    const [tabClick, setTabClick] = useState(0);
    const [currentProductId, setCurrentProductId] = useState(0);
    const [currentProduct, setCurrentProduct] = useState({});
    const [currentHowToId, setCurrentHowToId] = useState(0);
    const [currentHowTo, setCurrentHowTo] = useState({});
    const [isEditProd, setIsEditProd] = useState(false);
    const [isEditHowTo, setIsEditHowTo] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: "", weight: "", price: "", image: "" });
    const [newHowTo, setNewHowTo] = useState({ experiment_number: "", chapter: "", title: "", date: "", description: "", image: "" });

    useEffect(() => {
        const fetchData = async () => {
            await refreshProduct();
            await refreshHowto();
        };
        fetchData();
    }, [tabClick]);

    useEffect(() => {
        if (isEditProd && tabClick === 0) {
            const item = products.find(p => p.id === currentProductId);
            setCurrentProduct(item || {});
        } else if (isEditHowTo && tabClick === 1) {
            const item = howTos.find(h => h.id === currentHowToId);
            setCurrentHowTo(item || {});
        }
    }, [currentProductId, currentHowToId, isEditProd, isEditHowTo, products, howTos, tabClick]);

    const deleteItem = async (id, endpoint) => {
        await fetch(`http://localhost:8080/${endpoint}/${id}`, {
            method: 'DELETE'
        });
        if (endpoint === 'products') await refreshProduct();
        else if (endpoint === 'mycrohowto') await refreshHowto();
    };

    const refreshProduct = async () => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
    };

    const refreshHowto = async () => {
        const response = await fetch("http://localhost:8080/mycrohowto");
        const data = await response.json();
        setHowTos(data);
    };

    const editItemMode = (id, isProduct) => {
        if (isProduct) {
            setIsEditProd(true);
            setCurrentProductId(id);
        } else {
            setIsEditHowTo(true);
            setCurrentHowToId(id);
        }
    };

    const viewMode = (id, isProduct) => {
        const item = isProduct ? products.find(p => p.id === id) : howTos.find(h => h.id === id);
        
        const handleChange = (e, isProduct) => {
            const targetName = e.target.name;
            const targetValue = e.target.value;
            if (isProduct) {
                setCurrentProduct({ ...currentProduct, [targetName]: targetValue });
            } else {
                setCurrentHowTo({ ...currentHowTo, [targetName]: targetValue });
            }
        };
        if(isProduct)
        return (
            <div className="newOrUpdate">
                <input type="hidden" name="id" defaultValue={item.id} />
                <input type="text" name="name" placeholder="Name" defaultValue={item.name} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="weight" placeholder="Weight" defaultValue={item.weight} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="price" placeholder="Price" defaultValue={item.price} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="image" placeholder="Image URL" defaultValue={item.image} onChange={(e) => handleChange(e, isProduct)} />
                <button onClick={() => saveItem(item.id, isProduct)}>Save / Update</button>
            </div>
        );
        else 
        return (
            <div className="newOrUpdate">
                <input type="hidden" name="id" defaultValue={item.id} />
                <input type="number" name="experiment_number" placeholder="Experiment #" defaultValue={item.experiment_number} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="chapter" placeholder="Chapter" defaultValue={item.chapter} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="title" placeholder="Title" defaultValue={item.title} onChange={(e) => handleChange(e, isProduct)} />
                <input type="date" name="date" placeholder="Date" defaultValue={item.date} onChange={(e) => handleChange(e, isProduct)} />
                <textarea name="description" placeholder="Description" defaultValue={item.description} onChange={(e) => handleChange(e, isProduct)} />
                <input type="text" name="image" placeholder="Image URL" defaultValue={item.image} onChange={(e) => handleChange(e, isProduct)} />
                <button onClick={() => saveItem(item.id, isProduct)}>Save / Update</button>
            </div>
        );
    };

    const saveItem = async (id, isProduct) => {
        const endpoint = isProduct ? 'products' : 'mycrohowto';
        const currentItem = isProduct ? currentProduct : currentHowTo;

        const requestOptions = {
            method: id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentItem)
        };

        await fetch(`http://localhost:8080/${endpoint}${id ? `/${id}` : ''}`, requestOptions);
        setIsEditProd(false);
        setIsEditHowTo(false);
        setCurrentProduct({});
        setCurrentHowTo({});
        setCurrentProductId(0);
        setCurrentHowToId(0);
        setTabClick(isProduct ? 0 : 1);
    };

    const addNewProduct = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        };
        await fetch("http://localhost:8080/products", requestOptions);
        await refreshProduct();
        setNewProduct({ name: "", weight: "", price: "", image: "" });
    };

    const addNewHowTo = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHowTo)
        };
        await fetch("http://localhost:8080/mycrohowto", requestOptions);
        await refreshHowto();
        setNewHowTo({ experiment_number: "", chapter: "", title: "", date: "", description: "", image: "" });
    };

    const rows = (items, isProduct) => {
        if (isProduct)
        return items.map((item, index) => (
            <tr key={index}>
                <td className="d-none">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.weight}</td>
                <td>{item.price}</td>
                <td>{item.image}</td>
                <td><div className="d-flex">
                    <button onClick={() => editItemMode(item.id, true)}>Edit</button>
                    <button onClick={() => deleteItem(item.id, 'products')}>Delete</button>
                </div></td>
            </tr>
        ));
        else
        return items.map((item, index) => (
            <tr key={index}>
                <td className="d-none">{item.id}</td>
                <td>{item.experiment_number}</td>
                <td>{item.chapter}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
                <td><div className="d-flex">
                    <button onClick={() => editItemMode(item.id, false)}>Edit</button>
                    <button onClick={() => deleteItem(item.id, 'mycrohowto')}>Delete</button>
                </div></td>
            </tr>
        ));
    };

    return (
        <div className="modal fade" id="adminMaintenanceModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/* Modal header and other content */}
                    <div className="modal-body" id="modalBody">
                        <div className="tabs">
                            <div className={"tab " + (tabClick === 0 ? "active" : "")} onClick={() => setTabClick(0)}>Products</div>
                            <div className={"tab " + (tabClick === 1 ? "active" : "")} onClick={() => setTabClick(1)}>GuideArticles</div>
                        </div>
                        {isEditProd && tabClick === 0 && viewMode(currentProductId, true)}
                        {isEditHowTo && tabClick === 1 && viewMode(currentHowToId, false)}
                        {tabClick === 0 && (
                            <div className="newOrUpdate">
                                <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                                <input type="text" name="weight" placeholder="Weight" value={newProduct.weight} onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })} />
                                <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                                <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                                <button onClick={addNewProduct}>Add Product</button>
                            </div>
                        )}
                        {tabClick === 1 && (
                            <div className="newOrUpdate">
                                <input type="text" name="experiment_number" placeholder="Experiment Number" value={newHowTo.experiment_number} onChange={(e) => setNewHowTo({ ...newHowTo, experiment_number: e.target.value })} />
                                <input type="text" name="chapter" placeholder="Chapter" value={newHowTo.chapter} onChange={(e) => setNewHowTo({ ...newHowTo, chapter: e.target.value })} />
                                <input type="text" name="title" placeholder="Title" value={newHowTo.title} onChange={(e) => setNewHowTo({ ...newHowTo, title: e.target.value })} />
                                <input type="text" name="date" placeholder="Date" value={newHowTo.date} onChange={(e) => setNewHowTo({ ...newHowTo, date: e.target.value })} />
                                <input type="text" name="description" placeholder="Description" value={newHowTo.description} onChange={(e) => setNewHowTo({ ...newHowTo, description: e.target.value })} />
                                <input type="text" name="image" placeholder="Image URL" value={newHowTo.image} onChange={(e) => setNewHowTo({ ...newHowTo, image: e.target.value })} />
                                <button onClick={addNewHowTo}>Add How-To</button>
                            </div>
                        )}
                        <div className="records">
                            <table>
                                <tbody>
                                    {tabClick === 0 &&
                                    <tr>
                                        <th className="d-none">Id</th>
                                        <th>Name</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Image/Date</th>
                                        <th>Description</th>
                                        <th>&nbsp;</th>
                                    </tr>}
                                    {tabClick === 1 &&
                                    <tr>
                                        <th className="d-none">Id</th>
                                        <th>Experiment#</th>
                                        <th>Chapter</th>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>&nbsp;</th>
                                    </tr>}
                                    
                                    {tabClick === 0 && rows(products, true)}
                                    {tabClick === 1 && rows(howTos, false)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Modal footer */}
                </div>
            </div>
        </div>
    );
};

export default AdminMaintenanceModal;
