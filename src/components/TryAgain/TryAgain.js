import React from 'react';
import styles from "./TryAgain.module.css";

const TryAgain = ({ words, chars, wpm, restart }) => {
    return (
        <div className={styles.try_again_container}>
            <h1>Results</h1>
            <div className={styles.result_container}>
                <p> <b>Characters:</b> {words} </p>
                <p> <b>Words:</b> {chars} </p>
                <p> <b>Speed:</b> {wpm} wpm </p>
            </div>

            <div>
                <button 
                    onClick={() => restart()}
                    className={`${styles.end_buttons} ${styles.start_again_btn} `}
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default TryAgain;