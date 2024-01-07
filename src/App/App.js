import { Form } from "./Form";
import { Clock } from "./Clock";
import { StyledContainer } from "../Container/styled";

export function App() {

    return (
        <StyledContainer>
            <Clock />
            <Form />
        </StyledContainer>
    );
};

export default App;