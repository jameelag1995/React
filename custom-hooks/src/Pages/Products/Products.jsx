import React from "react";
import { useFetch } from "../../components/customHooks/useFetch";
const url = "https://6571c58bd61ba6fcc0138448.mockapi.io/users";
export default function Products() {
    const { data, errorMessage, loading } = useFetch(url);
    console.log(data);
    return (
        <>
            <div>
                <h1>Products</h1>
            </div>
            <div className="products-container">
                <p>{errorMessage}</p>
                {loading && "Loading..."}
                {
                    <ul>
                        {data &&
                            data.map((item) => (
                                <li key={item.id}><h2>{item.title}</h2></li>
                            ))}
                    </ul>
                }
            </div>
        </>
    );
}
