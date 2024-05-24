import Head from 'next/head';
import HeaderReservas from '@/components/HeaderReservas';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import ListaReservas from '@/components/listaReservas';
import VerMais from '@/components/verMais';

const ReservasAgendadas: React.FC = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Reservas Agendadas</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.svg" type='image/svg+xml' />
        </Head>
        <header>
            <HeaderReservas />
        </header>
        <main className={styles.main}>
          <ListaReservas />
        </main>
        <footer className={styles.footer}>
            <Footer />
        </footer>
    </div>
  );
};

export default ReservasAgendadas;
