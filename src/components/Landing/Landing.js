import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from "./Landing.module.css";
import flash from "./../../assets/hero.png";

const Landing = () => {
    return (
        <div className={styles.landing_container}>
            <div data-aos="fade-right" className={styles.landing_left}>
                <h1 className={styles.landing_header}>Quick typing test</h1>
                <div className={styles.typewriter_container}>
                <Typewriter
                    options={{
                        strings: ['Fast', 'Easy', 'Simple'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
            </div>
            <div className={styles.landing_right}>
                <img 
                    data-aos="fade-left" 
                    className={styles.flashimg} 
                    src={flash} 
                    alt="hero">
                </img>
            </div>
        </div>
    );
};

export default Landing;