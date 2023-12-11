import React, { useState } from "react";
import { data } from "../../data/data";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
export default function Products() {
    const [storeData, setStoreData] = useState(data);
    console.log(storeData);
    return (
        <div className="Products Page">
            <h1>Products</h1>
            <div className="products-container">
                {storeData.map((item) => {
                    return (
                        <Link key={item.id} to={`/products/${item.id}`}>
                            <h1>{item.title}</h1>
                            
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
