import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <Link to="/Counter">
                <button>Count </button>
            </Link>
            <Link to="/Calculator">
                <button>Calculator </button>
            </Link>
            <Link to="/Products">
                <button>Products </button>
            </Link>
        </div>
    );
}
