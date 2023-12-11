import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {data} from "../../data/data";
export default function Product() {
    const {productId} = useParams();
    console.log(data);
    console.log(useParams());
    // console.log(data.find(item=> item.id === sentId));
    // const {title,imageUrl,id,price,size} = data.find(item=> item.id === sentId);
    const [product,setProduct] = useState({});
    useEffect(()=>{
        const selectedProduct = data.find(item=> item.id === parseInt(productId))
        console.log(selectedProduct);
        if(selectedProduct){
            setProduct(selectedProduct)
        }
        
    },[productId])
    return (
        <div className="Product">
            <h2>{product.title} </h2>
            <img src={product.imageUrl} alt={product.title } />
            <h3>Price: {product.price }$</h3>
            <h3>Size: {product.size }</h3>
        </div>
    );
}
