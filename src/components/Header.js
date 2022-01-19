import React from 'react';
 // Components
import Hamburger from './navbar/Hamburger';
//CSS
import styles from './Header.module.css';


const Header = () => {

    return (
        <section className={styles.container}>
            <div className={styles.logo}>
                <h2>CRYPTO</h2>
            </div>
            <Hamburger />
        </section>
    );
};

export default Header;