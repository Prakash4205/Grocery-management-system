import React, { useState, useEffect } from 'react';

const InventoryTableList = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editProduct, setEditProduct] = useState({
    id: '',
    category: '',
    productName: '',
    quantity: 1,
    mrp: '',
    sellingPrice: ''
  });

  // Fetch data from localStorage and set it in state
  useEffect(() => {
    const storedData = localStorage.getItem('productData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        // Make sure the parsedData is an array
        if (Array.isArray(parsedData)) {
          setInventoryData(parsedData);
        } else {
          setInventoryData([parsedData]);
        }
      } catch (error) {
        console.error("Error parsing stored data: ", error);
      }
    }
  }, []);

  // Handle edit
  const handleEdit = (index) => {
    const productToEdit = inventoryData[index];
    setEditIndex(index);
    setEditProduct(productToEdit); // Set product data to the edit form
  };

  // Handle save after editing
  const handleSaveEdit = () => {
    const updatedData = [...inventoryData];
    updatedData[editIndex] = editProduct; // Update the edited product

    localStorage.setItem('productData', JSON.stringify(updatedData)); // Save updated data to localStorage
    setInventoryData(updatedData); // Update state with the new data
    setEditIndex(null); // Reset the edit index
    alert('Product updated successfully ✅');
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedData = inventoryData.filter((_, i) => i !== index); // Remove the product at the specified index

    localStorage.setItem('productData', JSON.stringify(updatedData)); // Save the updated data
    setInventoryData(updatedData); // Update state
    alert('Product deleted successfully ❌');
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  return (
    <>
      <div>
        <h3>Inventory Table List</h3>
      </div>
      <div>
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Quantity</th>
              <th>Selling Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.length > 0 ? (
              inventoryData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sellingPrice}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className="btn btn-primary">Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editIndex !== null && (
        <div style={{ marginTop: '20px' }}>
          <h4>Edit Product</h4>
          <form>
            <div>
              <label>Product ID: </label>
              <input
                type="number"
                name="id"
                value={editProduct.id}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Category: </label>
              <select
                name="category"
                value={editProduct.category}
                onChange={handleChange}
              >
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>

            <div>
              <label>Product Name: </label>
              <input
                type="text"
                name="productName"
                value={editProduct.productName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Quantity: </label>
              <input
                type="number"
                name="quantity"
                value={editProduct.quantity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>MRP: </label>
              <input
                type="number"
                name="mrp"
                value={editProduct.mrp}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Selling Price: </label>
              <input
                type="number"
                name="sellingPrice"
                value={editProduct.sellingPrice}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: '20px' }}>
              <button type="button" onClick={handleSaveEdit} className="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default InventoryTableList;
