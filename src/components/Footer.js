import React from 'react';
// Styles
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>This Template Made With	<span>&#10084;</span> by <span>Vahed Rezapour</span></h2>
            </div>
        </section>
    );
};

export default Footer;