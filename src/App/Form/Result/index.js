import React from "react";
import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <>
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);