import React from 'react';
// Styles
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    );
};

export default Loader;