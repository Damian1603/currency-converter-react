import { useFooterData } from "./useFooterData"
import { StyledInfo } from "../styled"

export const Footer = (ratesData) => {
    const formattedRatesDay = useFooterData(ratesData)

    return (

        <StyledInfo>
            Kursy walut pobierane są z Europejskiego Banku Centralnego<br /> Aktualne na dzień <strong> {formattedRatesDay}</strong>
            <p>
                * - to pole musi być uzupełnione
            </p>
        </StyledInfo>

    )
};