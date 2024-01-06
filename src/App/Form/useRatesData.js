import { useState, useEffect } from 'react';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    })

    const API_URL = "https://api.currencyapi.com/v3/currencies?apikey=cur_live_x7ObLVw9onFaGGeacM2AM12N6Eo14dHx6Kyl4BI5&currencies=EUR%2CUSD%2CCAD&base_currency=PLN"

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date
                });

            } catch {
                setRatesData({
                    state: "error"
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData
};

