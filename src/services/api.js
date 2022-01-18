import axios from "axios";

const TOP_COINS = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const getCoin = async () => {
    const res = await axios.get(TOP_COINS);
    return res.data;
}

export {getCoin};