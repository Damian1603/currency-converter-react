import { StyledResult } from "./styled";

export const Result = ({ result }) => (
    
    <StyledResult>
        {!!result && (
            <>
                <strong>
                    {result.sourceAmount}&nbsp;PLN&nbsp;=&nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);
