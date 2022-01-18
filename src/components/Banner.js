import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.headText}>
                <h2>The best trading cryptocurrency assets</h2>
            </div>
            <div className={styles.text}>
                <p>Buy and Sell cryptocurrency with the best quality and easy</p>
            </div>
            <div className={styles.btn}>
                <Link to="/">BUY NOW</Link>
            </div>
        </section>
    );
};

export default Banner;