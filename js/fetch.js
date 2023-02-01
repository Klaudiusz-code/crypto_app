import { resultCurrency } from "./app.js";

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

let currency;

(async () => {
    const res = await fetch(API);
    const data = await res.json();
    currency = data.map(val => {
        return {
            img: val.image,
            price: val.current_price.toFixed(2),
            max24: val.high_24h.toFixed(2).toLocaleString("pl-PL", {maximumFractionDigits: 2}),
            min24: val.low_24h.toFixed(2).toLocaleString("pl-PL", {maximumFractionDigits: 2}),
            change: val.price_change_24h.toFixed(3),
        }
    });
    resultCurrency(currency)
})();
