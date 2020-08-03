import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Shaunak Gadkari 🌌 | Web Developer</title>

        <meta property="og:title" content="Shaunak Gadkari - Web Developer" />
        <meta property="og:site_name" content="Shaunak Gadkari | Web Developer" />
        <meta property="og:url" content="https://srg.codes" />
        <meta property="og:description" content="I create innovative and scalable web solutions. Contact me at hello@srg.codes for a free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.srg.codes/images/header/header@3x.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shaunak_g" />
        <meta name="twitter:description" content="I create innovative and scalable web solutions. Contact me at hello@srg.codes for a free quote." />
        <meta name="twitter:title" content="Shaunak Gadkari | Web Developer" />
        <meta name="twitter:image" content="https://cdn.srg.codes/images/header/header@3x.png" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Shaunak Gadkari
        </h1>

        <h2 className={styles.description}>
          I'm a web developer based in Melbourne.
        </h2>

        <div className={styles.grid}>
          {/* <Link to="about"> */}
            <a href="about/" className={[styles.card, styles.whoami].join(" ")}>
              <h3>Who I am &rarr;</h3>
              <p>I create innovative and scalable web solutions.</p>
            </a>
          {/* </Link> */}

          {/* <Link to="projects"> */}
            <a href="projects/" className={[styles.card, styles.projects].join(" ")}>
              <h3>Projects &rarr;</h3>
              <p>See some of my past projects that have helped the community.</p>
            </a>
          {/* </Link> */}

          <a
            href="https://github.com/shaunakg"
            className={[styles.card, styles.github].join(" ")}
          >
            <h3>Github &rarr;</h3>
            <p>View my repositories and open-source contributions.</p>
          </a>

          <a
            href="https://twitter.com/shaunak_g"
            className={[styles.card, styles.twitter].join(" ")}
          >
            <h3>Twitter &rarr;</h3>
            <p>
              Find me on Twitter, where I post interesting projects.
            </p>
          </a>

        </div>
      </main>

      {/* <footer className={styles.footer}>
        <img src="https://cdn.virgo.srg.codes/logos/logotype/logotype.svg" alt="Vercel Logo" className={styles.logo} />
      </footer> */}
    </div>
  )
}
