// components/Header.tsx
import Image from 'next/image';
import lupa from '../assets/lupa.svg';
import loginIcon from '../assets/login-ico.svg';
import styles from '../styles/header.module.css';
import logo from '../assets/le-Bruine-logo.png';

import Link from 'next/link';

function Header() {
  return (
    <div className={styles.raiz}>
      <Link href='/'>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={200} height={60} />
        </div>
      </Link>
      <div className={styles.search_area}>
        <input type="text" placeholder='Busque por restaurante, comida, cidade...' className={styles.search_bar} id='searchBar'/>
        <button className={styles.button_search}>
          <Image src={lupa} alt="lupa" width={24} height={24} />
        </button>
      </div>
      <div className={styles.options}>
        <Link href='#'><div className={styles.menu}>Fazer Reserva</div></Link>
        <Link href='#'><div className={styles.menu}>Minhas Reservas</div></Link>
        <Link href='#'><div className={styles.menu}>Restaurantes</div></Link>
      </div>
      <Link href='/Contact'>
        <div className={styles.login}>
          <Image src={loginIcon} alt="icone de login" width={24} height={24} />
          <p className={styles.font_login}>Login</p>
        </div>
      </Link>
    </div>
  );
}
  
export default Header;
