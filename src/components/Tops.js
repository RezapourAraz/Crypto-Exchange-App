import React, { useContext } from 'react';
// Components
import Top from './Top';
// Context
import { CoinContext } from '../context/CoinContextProvider';
// Functions
import { getTopFour } from '../helper/functions';
// Styles
import styles from './Tops.module.css';

const Tops = () => {

    const coins = useContext(CoinContext);

    const tops = getTopFour(coins);

    return (
        <section className={styles.container}>
            {
                tops.map(coin => <Top key={coin.id} coinData={coin} /> )
            }
        </section>
    );
};

export default Tops;