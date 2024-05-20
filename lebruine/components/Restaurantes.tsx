import React from "react";
import styles from '../styles/restaurantes.module.css';
import Link from 'next/link';

const Restaurantes: React.FC = () => {
    return (
        <div className={styles.restaurantes}>
            <div className={styles.info} id="katon">
                <div className={styles.subInfo}>
                    <h2 className={styles.r_titulo}>Restaurante Katon Haisekisho</h2>
                    <h4 className={styles.rua}>Rua Napoleão Bonaparte, 32, Boa Vista - Garanhuns-PE</h4>
                </div>
            </div>
            <div className={styles.n_fone}>
                <span className={styles.fone}>(87)99909-0001</span>
            </div>
            <div className={styles.btnReserva}>
                <button className={styles.reserva}>
                    <Link href="/fazer-reserva">Fazer Reserva</Link>
                </button>
            </div>
        </div>
    );
}

export default Restaurantes;
