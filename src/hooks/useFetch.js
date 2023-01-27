import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await Axios.get(endPoint);
        setData(response.data);
    }

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.group('Fetch Data Errors')
            console.error(error);
            console.groupEnd('Fetch Data Errors Close')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endPoint]);
    return {
        data,
        setData
    };
};
export default useFetch;
