import axios from "axios";
import "./Avatar.css";
import { useEffect, useState } from "react";
import AvatarCard from "./AvatarCard";
const url = "https://randomuser.me/api/";
const avatarsData = [];
export const Avatar = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            for (let i = 0; i < 10; i++) {
                const result = await axios.get(url);
                avatarsData.push(result.data.results[0]);
            }
            setData(avatarsData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    const handleSearch = (e) => {
        const updatedData = avatarsData.filter(
            (usr) =>
                usr.name.first
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                usr.name.last
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
        );
        setData(updatedData);
    };
    return (
        <div className="Avatar">
            <div className="search-container">
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleSearch}
                />
            </div>
            <div className="avatars-container">
                {data.map((usr, index) => {
                    return (
                        <AvatarCard
                            img={usr.picture}
                            name={usr.name}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
