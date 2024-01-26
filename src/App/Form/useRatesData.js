import { useState, useEffect } from 'react';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_c4E1584oaVlL2X9XvyBmbCvhHsno7pcjIpaITNlF&base_currency=PLN"

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const { meta, data } = await response.json();

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