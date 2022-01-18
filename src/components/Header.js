import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.logo}>
                    <h2>CRYPTO</h2>
                </div>
                <nav className={styles.navbar}>
                    <ul><li><Link to="/home" >Home</Link></li></ul>
                    <ul><li><Link to="/coins" >Coins</Link></li></ul>
                    <ul><li><Link to="/exchange" >Exchange</Link></li></ul>
                    <ul><li><Link to="/home" >About</Link></li></ul>
                </nav>
                <div className={styles.btn}>
                    <Link to="/">Connect Wallet</Link>
                </div>
                
            </div>
        </header>
    );
};

export default Header;