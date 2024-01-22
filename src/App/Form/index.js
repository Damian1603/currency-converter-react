import { useState } from "react";
import { Result } from "./Result";
import {
    StyledForm, StyledHeader, StyledContainer,
    StyledLabelText, StyledField, StyledButton,
    StyledLoading, StyledFailure
} from "./styled";
import { useRatesData } from "./useRatesData";
import { Clock } from "./Clock";
import { Footer } from "./Footer";

export const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const [result, setResult] = useState(null);
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.data[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: rate * amount,
            currency,
        })
    };

    

    return (

        <StyledForm onSubmit={onSubmit}>
            <Clock />
            <StyledHeader>
                Kalkulator walutowy
            </StyledHeader>
            {ratesData.state === "loading"
                ? (
                    <StyledLoading>
                        Ładuję kursy...<br /> To może chwilę potrwać
                    </StyledLoading>
                )
                : (
                    ratesData.state === "error" ? (
                        <StyledFailure>
                            Niestety coś poszło nie tak. Sprawdź połączenie z internetem
                        </StyledFailure>
                    ) : (
                        <>
                            <p>
                                <StyledContainer>
                                    <StyledLabelText>
                                        *Kwota w PLN:
                                    </StyledLabelText>
                                    <StyledField
                                        as="input"
                                        autoFocus
                                        name="amount"
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Wpisz kwotę w złotówkach"
                                        type="number"
                                        required
                                        min={1}
                                    />
                                </StyledContainer>
                            </p>
                            <p>
                                <StyledContainer>
                                    <StyledLabelText>
                                        Waluta:
                                    </StyledLabelText>
                                    <StyledField
                                        name="currency"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.data).map((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        ))}
                                    </StyledField>
                                </StyledContainer>
                            </p>
                            <p>
                                <StyledButton>
                                    <strong>Przelicz</strong>
                                </StyledButton>
                            </p>
                            <Footer />
                            <Result result={result} />
                        </>
                    )
                )}
        </StyledForm>

    );

};