import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import {
    StyledForm, StyledHeader, StyledContainer,
    StyledLabelText, StyledField, StyledButton,
    StyledInfo
} from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledHeader>
                Kalkulator walutowy
            </StyledHeader>
            <p>
                <StyledContainer>
                    <StyledLabelText>
                        *Kwota w PLN:
                    </StyledLabelText>
                    <StyledField
                        as="input"
                        autoFocus
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
                    </StyledField>
                </StyledContainer>
            </p>
            <p>
                <StyledButton>
                    <strong>Przelicz</strong>
                </StyledButton>
            </p>
            <StyledInfo>
                Kurs pochodzą ze strony nbp.pl z tabeli nr 177/A/NBP/2023 z dnia 2023-09-13
                <p>
                    * - to pole musi być uzupełnione
                </p>
            </StyledInfo>
            <Result result={result} />
        </StyledForm>
    );
};