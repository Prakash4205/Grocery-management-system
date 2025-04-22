import React, { useState } from 'react';
import "./InventoryFormSection.css";

const InventoryFormSection = () => {
  const [category, setCategory] = useState('category');
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mrp, setMrp] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      id,
      category,
      productName,
      quantity,
      mrp,
      sellingPrice
    };
    console.log(productData)
    localStorage.setItem('productData', JSON.stringify(productData));
    alert('Data stored in localStorage ✅');
  };

  const handleReset = () => {
    setCategory('category');
    setId('');
    setProductName('');
    setQuantity(1);
    setMrp('');
    setSellingPrice('');
    localStorage.removeItem('productData');
    alert('Form reset and data cleared ❌');
  };

  return (
    <>
      <form className='product-form' onSubmit={handleSubmit}>
        <div>
          <label>Product ID: </label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type='number'
            placeholder='Enter Product ID'
            required
          />
        </div>

        <div className='form-drop'>
          <div className='form-label'>Category</div>
          <div className="dropup-center dropup">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {category}
            </button>
            <ul className="dropdown-menu">
              <li><button type="button" className="dropdown-item" onClick={() => setCategory('fruits')}>Fruits</button></li>
              <li><button type="button" className="dropdown-item" onClick={() => setCategory('vegetables')}>Vegetables</button></li>
              <li><button type="button" className="dropdown-item" onClick={() => setCategory('dairy')}>Dairy</button></li>
            </ul>
          </div>
        </div>

        <div>
          <label>Product Name: </label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder='Enter product name'
            type='text'
          />
        </div>

        <div>
          <label>Quantity: </label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder='Enter Quantity'
          />
        </div>

        <div>
          <label>MRP: </label>
          <input
            type='number'
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
            placeholder='Enter MRP'
            required
          />
        </div>

        <div>
          <label>Selling Price: </label>
          <input
            type='number'
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder='Enter Selling Price'
            required
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button className='btn btn-success' type="submit">Submit</button>{' '}
          <button className='btn btn-danger' type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </>
  );
};

export default InventoryFormSection;
