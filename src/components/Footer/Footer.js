import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <a 
                href="https://rama.gq"
                className={styles.footer_link}
                target="_blank"
                rel="noreferrer"
            >
                Made by Rex
            </a>
            
        </div>
    );
};

export default Footer;