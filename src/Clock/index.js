import { OnCurrentDate } from "./OnCurrentDate";
import "./style.css"; 

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
    const date = OnCurrentDate()

    return (
        <> Dzisiaj jest: {renderCurrentDate(date)}</ >
    )
};
