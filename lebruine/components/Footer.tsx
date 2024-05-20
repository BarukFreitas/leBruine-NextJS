import React from "react";
import styles from '../styles/footer.module.css';
import logoInstagram from '../assets/instagram-ico.svg';
import logoFacebook from '../assets/facebook-ico.svg';

function Footer(){
    return(
        <footer className={styles.rodape}>
            <p className={styles.footer}>Acompanhe as redes sociais do Le Bruine: <img src={logoInstagram} alt="logo instagram" className="rede-social"/><img src={logoFacebook} alt="logo facebook" className="rede-social"/></p>
            <p className={styles.footer}>Rua Francisco Carraca de Freitas, 270, Boa Vista, Garanhuns-PE</p>
            <p className={styles.footer}>Le Bruine © 2024 - Todos os direitos reservados / Desenvolvido por: F.A Soluções Tecnológicas - Yuri Baruk Freitas | Thiago Anízio Miranda</p>
        </footer>
    )
}

export default Footer;