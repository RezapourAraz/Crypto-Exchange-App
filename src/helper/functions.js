const getTop = (data) => {
    const tops = [];
    data.map(coin => {
        if(coin.market_cap_rank <= 10) {
            tops.push(coin);
        }
        return coin;
    });
    return tops;
}

const getTopFour = (data) => {
    const topThree = [];
    data.map(coin => {
        if (coin.market_cap_rank <= 4) {
            topThree.push(coin);
        }
        return coin;
    });
    return topThree;
}

export { getTop, getTopFour };