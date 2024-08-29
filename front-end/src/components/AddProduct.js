import React, { useEffect, useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState('');

    const addProduct = async () => {
        if (!name || !price || !company || !category) {
            setError(true);
            return false;
        }
        console.warn(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }


    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" className="inputBox"
                onChange={e => { setName(e.target.value) }}
                placeholder="Enter product name" />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input type="text" className="inputBox"
                onChange={e => { setPrice(e.target.value) }}
                placeholder="Enter product price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input type="text" className="inputBox"
                onChange={e => { setCategory(e.target.value) }}
                placeholder="Enter product category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input type="text" className="inputBox"
                onChange={e => { setCompany(e.target.value) }}
                placeholder="Enter product company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button className="appButton"
                onClick={addProduct}
            >Add Product</button>
        </div>
    )
}

export default AddProduct;