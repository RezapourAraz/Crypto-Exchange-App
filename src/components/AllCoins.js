import React, { useContext } from 'react';
// Context
import { CoinContext } from '../context/CoinContextProvider';
// Components
import Coin from './Coin';
// Styles
import styles from './AllCoins.module.css';

const AllCoins = () => {

    const coins = useContext(CoinContext);

    return (
        <section className={styles.container}>
            <div className={styles.search}>
                <input type="text" placeholder='Search Coin...' />
            </div>
            <div className={styles.items}>
            {
                coins.map(coin => <Coin key={coin.id} coinData={coin} />)
            }
            </div>
        </section >
    );
};

export default AllCoins;