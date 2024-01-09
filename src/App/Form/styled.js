import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 600px;
    margin: auto;
    display: block;
`;

export const StyledHeader = styled.h1`
    text-align: center;
`;

export const StyledContainer = styled.label`
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
    }
`;

export const StyledLabelText = styled.span`
    width: 100%;
    margin-right: 5px;
    font-size: 20px;
`;

export const StyledField = styled.select`
    border: 1px solid ${({ theme }) => theme.colors.borderField};
    padding: 10px;
    border-radius: 5px;
    width: 150%;
    background-color: ${({ theme }) => theme.colors.lightGray};
    margin: 5px;
    align-items: center;
    cursor: pointer;
`;

export const StyledButton = styled.button`
    border: 2px solid ${({ theme }) => theme.colors.borderButtonGray};
    padding: 15px;
    border-radius: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    margin: auto;
    cursor: pointer;

    &:hover{
    transition: 1s;
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.buttonActiveGray};
    }
`;

export const StyledInfo = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
`;

export const StyledLoading = styled.p`
background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const StyledFailure = styled.p`
background-color: ${({ theme }) => theme.colors.crimson};
text-align:center;
`;