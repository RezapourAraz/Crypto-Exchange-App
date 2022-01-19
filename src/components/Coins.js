import React, { useContext } from 'react';
// Context
import { CoinContext } from '../context/CoinContextProvider';
// Components
import Coin from './Coin';
// Functions
import { getTop } from '../helper/functions';
// Styles
import styles from './Coins.module.css';
import Loader from './Loader';


const Coins = () => {

    const coins = useContext(CoinContext);

    const tops = getTop(coins)


    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Top Coins</h2>
            </div>
            <div className={styles.coinsTitles}>
                <span className={styles.name}>Name</span>
                <span className={styles.price}>Price</span>
                <span className={styles.change}>24h Change</span>
                <span className={styles.volume}>Market Cap</span>
                <span className={styles.hightPrice}>24h Hight Price</span>
                <span className={styles.lowPrice}>24h Low Price</span>
            </div>
            <div className={styles.items}>
                {
                    tops.length === 0 ? <Loader /> : tops.map(coin => <Coin key={coin.id} coinData={coin} />)
                }
            </div>
            <div className={styles.line}>
                <div></div>
            </div>
        </section>
    );
};

export default Coins;