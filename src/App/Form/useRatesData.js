import { useState, useEffect } from 'react';
import { fetchRatesData } from '../fetchRatesData';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });


    useEffect(() => {
        const fetchRates = async () => {
            try {
                
                const { meta, data } = await fetchRatesData();
                
                setRatesData({
                    state: "success",
                    meta,
                    data,
                });

            } catch (error) {
                setRatesData({
                    state: "error",
                });
                console.log(error)
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData
};