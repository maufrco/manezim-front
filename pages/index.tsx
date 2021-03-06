import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manezim Store</title>
        <meta name="description" content="Manezim Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em breve <a href="https://manezim.com.br">Manezim Store</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://manezim.com.br" rel="noopener noreferrer">
          Manezim Store{" "}
        </a>
      </footer>
    </div>
  );
};

export default Home;
