import React from 'react';
import styles from './Footer.module.css'
import { getCurrentDate } from '../../data/data';

const Footer = () => {
    const currentDate = getCurrentDate();

    return (
        <footer className={styles.footer}>
            <p>Today's Date: {currentDate}</p>
        </footer>
    )
}

export default Footer;