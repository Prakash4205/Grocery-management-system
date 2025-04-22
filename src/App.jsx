import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import InventoryFormSection from './Components/InventoryFormSection';
import InventoryTableList from './Components/InventoryTableList';
import './App.css';


const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/InventoryFormSection" element={<InventoryFormSection />} />
        <Route path="/InventoryTabelList" element={<InventoryTableList />} />
      </Routes>
    </div>
  );
};

export default App;
