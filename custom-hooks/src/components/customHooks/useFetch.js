import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(url);
                setData(result.data);
            } catch (error) {
                setErrorMessage(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, errorMessage, loading };
}
