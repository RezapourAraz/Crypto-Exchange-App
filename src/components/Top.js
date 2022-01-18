import React from 'react';
// styles
import styles from './Top.module.css';


const Top = ({coinData}) => {

    const { symbol, name , image, current_price, market_cap_change_percentage_24h } = coinData;

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.coinInfo}>
                <div className={styles.name}>
                    <h3>{symbol.toUpperCase()}</h3>
                    <p>{name}</p>
                </div>
                <div className={styles.price}>
                    {
                        market_cap_change_percentage_24h <= 0 ? 
                        <span className={styles.red}>{market_cap_change_percentage_24h.toFixed(2)}</span> :
                        <span className={styles.green}>{market_cap_change_percentage_24h.toFixed(2)}</span>
                    }
                    <p>{current_price.toLocaleString()} $</p>
                </div>
            </div>
        </div>
    );
};

export default Top;