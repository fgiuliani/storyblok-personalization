import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Jeans() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jeans</h1>

        <h2 className={styles.title}>Cool Jeans</h2>

        <Link href="/home">
          <a className={styles.card}>
            <h3>Back to Home</h3>
          </a>
        </Link>
      </main>
    </div>
  );
}
