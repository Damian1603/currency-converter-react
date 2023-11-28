import { useState, useEffect } from "react";
import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";
import "./App.css";

function App() {
    const [result, setResult] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])



    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        })
    };

    return (

        <div className="app">
            Licznik: {counter}
            <div className="data">
                <Clock />
            </div>
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </div>
    );
};

export default App;