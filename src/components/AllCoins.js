import React, { useContext, useState } from 'react';
// Context
import { CoinContext } from '../context/CoinContextProvider';
// Components
import Coin from './Coin';
import Loader from './Loader';
// Styles
import styles from './AllCoins.module.css';

const AllCoins = () => {

    const coins = useContext(CoinContext);
    const [ search, setSearch] = useState("");

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    console.log(search);

    return (
        <section className={styles.container}>
            <div className={styles.search}>
                <input type="text" placeholder='Search Coin...' value={search} onChange={searchHandler} />
            </div>
            <div className={styles.items}>
            {
                searchedCoin.length === 0 ? <Loader /> : searchedCoin.map(coin => <Coin key={coin.id} coinData={coin} />)
            }
            </div>
        </section >
    );
};

export default AllCoins;