import React from "react";
import pin from '../assets/pin_map_ico.svg';
import styles from '../styles/myPlace.module.css';
import Link from "next/link";
import Image from "next/image";

function MyPlace(){
    return(
        <div className={styles.myPlace}>
            <h2 className={styles.title}>O que você quer reservar hoje?</h2>
            <div className={styles.myPlace}>
                <Image src={pin} alt="pin mapa" className={styles.pin_map} />
                <p className={styles.text}>Você está em: <Link href="#" className={styles.city}>Garanhuns-PE</Link></p>
                <p className={styles.text_minor}>Não é o seu local? Clique na cidade e escolha seu endereço</p>
            </div>
        </div>
    )
}

export default MyPlace;