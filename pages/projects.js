// index.js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client';
import Head from 'next/head';
import Header from '../components/header';
import Link from 'next/link';
import styles from '../styles/AllProjects.module.css';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Projects = (props) => {
    const { projects = [] } = props
    return (
        <>

        <Head>

            <title>{`Projects | Shaunak G - Web Developer`}</title>
            <meta name="title" content={`Projects | Shaunak G - Web Developer`} />
            <meta name="description" content={"Check out some of the work that I've done in the past."} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://srg.codes/projects"} />
            <meta property="og:title" content={`Projects | Shaunak G - Web Developer`} />
            <meta property="og:description" content={"Check out some of the work that I've done in the past."} />
            <meta property="og:image" content={"https://og.srg.codes/My%20Projects.png?theme=dark&md=1&fontSize=175px&images=https%3A%2F%2Fcdn.srg.codes%2Fimages%2Ficon%2Ficon.svg&bgimage=wiggle"} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={"https://srg.codes/projects"} />
            <meta property="twitter:title" content={`Projects | Shaunak G - Web Developer`} />
            <meta property="twitter:description" content={"Check out some of the work that I've done in the past."} />
            <meta property="twitter:image" content={"https://og.srg.codes/My%20Projects.png?theme=dark&md=1&fontSize=175px&images=https%3A%2F%2Fcdn.srg.codes%2Fimages%2Ficon%2Ficon.svg&bgimage=wiggle"} />

        </Head>

        <Header />

        <main className={styles.main}>
            <article>
                <h1 className={styles.bigTitle}>Things I've Made</h1>

                <div className={styles.container}>
                    {projects.map(
                    ({ _id, title = '', slug = '', _updatedAt = '', mainImage, description  }) =>
                        slug && (
                            <Link key={_id} href="/projects/[slug]" as={`/projects/${slug.current}`}>
                                <a className={styles.project}>
                                    { mainImage && <img src={urlFor(mainImage).height(300).url()}/> }
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </a>
                            </Link>
                        )
                    )}
                </div>
            </article>
        </main>
        </>
    )
}

Projects.getInitialProps = async () => ({
    projects: await client.fetch(groq`
      *[_type == "project"]
    `)
})

export default Projects