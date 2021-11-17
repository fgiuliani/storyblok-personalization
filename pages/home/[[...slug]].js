import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home({ custom }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>

        <h2 className={styles.title}>Choose your favourite item</h2>

        <div className={styles.grid}>
          <Link href="/jeans">
            <a className={styles.card}>
              <h3>Jeans</h3>
            </a>
          </Link>
          <Link href="/shirts">
            <a className={styles.card}>
              <h3>Shirts</h3>
            </a>
          </Link>
        </div>

        {custom ? <h2 className={styles.title}>{custom}</h2> : <></>}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: ["/home/", "/home/jeans", "/home/shirts"],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  let custom = "";

  if (slug) {
    custom =
      slug == "jeans" ? "The best jeans for you" : "The best shirts for you";
  }

  return {
    props: {
      custom: custom,
    },
    revalidate: 3600,
  };
}
