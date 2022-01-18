import React from 'react';
// Styles
import styles from './Coin.module.css'

const Coin = ({coinData}) => {

    const { name, image, current_price, symbol, market_cap_change_percentage_24h, market_cap, high_24h, low_24h } = coinData;
    console.log(coinData);

    return (
        <div className={styles.container}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>{current_price.toLocaleString()} $</span>
            <div className={styles.change}>
            {
                market_cap_change_percentage_24h <= 0 ? 
                <span className={styles.red}>{market_cap_change_percentage_24h.toFixed(2)}</span> :
                <span className={styles.green}>{market_cap_change_percentage_24h.toFixed(2)}</span>
            }
            </div>
            <span className={styles.volume}>{market_cap.toLocaleString()} $</span>
            <span className={styles.hightPrice}>{high_24h.toLocaleString()} $</span>
            <span className={styles.lowPrice}>{low_24h.toLocaleString()} $</span>
        </div>
    );
};

export default Coin;