import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: 700px;
    border-radius: 15px;
    box-shadow: 1px 4px 12px 4px ${({ theme }) => theme.colors.shadowColor};
    padding: 10px;
    margin: 100px auto;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    font-family: 'Kanit', sans-serif;;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 20px
    }
`;