import { useState } from "react";
import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { StyledContainer } from "../Container/styled";

export function App() {
    const [result, setResult] = useState("");

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        })
    };

    return (

        <StyledContainer>
            <Clock />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </StyledContainer>
    );
};

export default App;