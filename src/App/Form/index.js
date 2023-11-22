import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">
                Kalkulator walutowy
            </h1>
            <p>
                <label className="container">
                    <span className="form__labelText">
                        *Kwota w PLN:
                    </span>
                    <input
                        autoFocus
                        className="form__field"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w złotówkach"
                        type="number"
                        required
                    />
                </label>
            </p>
            <p>
                <label className="container">
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">
                    <strong>Przelicz</strong>
                </button>
            </p>
            <p className="form__info">
                Kurs pochodzą ze strony nbp.pl z tabeli nr 177/A/NBP/2023 z dnia 2023-09-13
            </p>
            <p className="form__info">
                * - to pole musi być uzupełnione
            </p>
            <Result result={result} />
        </form>
    );
};