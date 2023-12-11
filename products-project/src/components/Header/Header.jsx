import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/products">
                <button>Products</button>
            </Link>
        </div>
    );
}
