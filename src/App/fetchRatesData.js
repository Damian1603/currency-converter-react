import axios from "axios";

const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_x7ObLVw9onFaGGeacM2AM12N6Eo14dHx6Kyl4BI5&currencies=&base_currency=PLN"

export const fetchRatesData = async () => {
    const response = await axios.get(API_URL)
    if (response.status !== 200) {
        throw new Error(response.statusText)
    }
    const data = await response.data;
    return data;
};