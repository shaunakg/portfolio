
import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/About.module.css';

const About = (props) => {
    
    return (

        <>

        <Head>

            <title>{`About Me | Shaunak G - Web Developer`}</title>
            <meta name="title" content={`About Me | Shaunak G - Web Developer`} />
            <meta name="description" content={"Learn about who I am, what I do, and how my skills can be of use to your business."} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://srg.codes/about"} />
            <meta property="og:title" content={`Projects | Shaunak G - Web Developer`} />
            <meta property="og:description" content={"Learn about who I am, what I do, and how my skills can be of use to your business."} />
            <meta property="og:image" content={"https://og.srg.codes/**About**%20Me.png?theme=light&md=1&square=0&fontSize=100px&border=20px+solid+%23FFF&images=https%3A%2F%2Fcdn.srg.codes%2Fimages%2Ficon%2Ficon.svg&bgimage=triangle"} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={"https://srg.codes/about"} />
            <meta property="twitter:title" content={`About Me | Shaunak G - Web Developer`} />
            <meta property="twitter:description" content={"Learn about who I am, what I do, and how my skills can be of use to your business."} />
            <meta property="twitter:image" content={"https://og.srg.codes/**About**%20Me.png?theme=light&md=1&square=0&fontSize=100px&border=20px+solid+%23FFF&images=https%3A%2F%2Fcdn.srg.codes%2Fimages%2Ficon%2Ficon.svg&bgimage=triangle"} />

        </Head>

        <Header />

        <main className={styles.main}>

            <article>

                <h1 className={styles.bigTitle}>
                    Hi, I'm
                    <span className={styles.differentName}> Shaunak</span>
                </h1>

                <h2 className={styles.tagline}>
                    I build 
                    <span className="tagword"> dynamic</span>, 
                    <span className="tagword"> fast</span>, and 
                    <span className="tagword"> compliant</span> websites.
                </h2>

                <div className={styles.socials}>
                    <a href="../projects/">Projects</a>
                    <a href="https://twitter.com/shaunak_g">Twitter</a>
                    <a href="https://github.com/shaunakg">Github</a>
                    <a href="https://facebook.com/shaunak.gadkari">Facebook</a>
                    <a href="https://instagram.com/shaunak.r.g">Instagram</a>
                    <a href="mailto:hello@srg.codes">Email</a>
                </div>

            </article>

        </main>

        </>

    );

}

export default About