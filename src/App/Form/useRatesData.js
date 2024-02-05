import { useState, useEffect } from 'react';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_x7ObLVw9onFaGGeacM2AM12N6Eo14dHx6Kyl4BI5&currencies=&base_currency=PLN"

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