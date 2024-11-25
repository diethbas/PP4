import './style/css/skin.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/index.js";
import Home from "./components/Home/index.js";
import Howto from './components/Howto/index.js';
import { useEffect, useState } from 'react';
import Shop from './components/Shop/index.js';
import About from './components/About/index.js';
import Products from './components/products/products.js';
import Lessons from './components/lesson/lesson.js';
import AdminLogin from './components/AdminLogin/index.js';
import AdminMaintenanceModal from './components/AdminMaintenanceModal/index.js';

function App() {
  return (<>
    <div className="home">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howto" element={<Howto currentPage="howto" />} />
          <Route path="/shop" element={<Shop currentPage="shop" />} />
          <Route path="/about" element={<About currentPage="about" />} />
        </Routes>
      </BrowserRouter>
    </div>
    <AdminLogin />
    <AdminMaintenanceModal />

    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> */}
  </>
  );
}

export default App;