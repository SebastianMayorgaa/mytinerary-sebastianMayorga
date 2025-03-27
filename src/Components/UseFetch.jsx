import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, { cache: "no-store" });
                const citiesList = await response.json();
                console.log("Data in hook", citiesList.response);
                setCities(citiesList.response);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [url]);

    return { cities, loading };
};

export default useFetch;

