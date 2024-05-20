import React from "react";
import styles from '../styles/carousel.module.css';

function Carousel(){
    return(
        <div className={styles.carousel}>
            <div className={styles.card_hamburguer}>
                <h1>Hamburger</h1>
            </div>
            <div className={styles.card_sushi}>
                <h1>Sushi</h1>
            </div>
            <div className={styles.card_massas}>
                <h1>Massas</h1>
            </div>
            <div className={styles.card_pizza}>
                <h1>Pizza</h1>
            </div>
        </div>
    )
}

export default Carousel;