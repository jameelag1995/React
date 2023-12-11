import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<Product />} />
            </Routes>
        </>
    );
}

export default App;
