import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        const fetchCurrency = async () => {
            try {
                let response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );

                if (!response.ok) {
                    response = await fetch(
                        `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
                    );
                }

                if (!response.ok) {
                    throw new Error("Currency API request failed");
                }

                const result = await response.json();
                setData(result[currency] || {});

            } catch (error) {
                console.error("Currency API Error:", error);
                setData({});
            }
        };

        fetchCurrency();

    }, [currency]);

    return data;
}

export default useCurrencyInfo;