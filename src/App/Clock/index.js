import { useCurrentDate } from "./useCurrentDate";
import { StyledData } from "./dataStyle";

const renderCurrentDate = (date) =>
    date.toLocaleDateString("pl-PL", {
        month: "long",
        weekday: "long",
        year: "numeric",
        day: "numeric",
        second: "numeric",
        minute: "numeric",
        hour: "numeric",
    });

export const Clock = () => {
    const date = useCurrentDate()

    return (
        <StyledData>
            <> Dzisiaj jest: {renderCurrentDate(date)}</ >
        </StyledData>
    )
};
