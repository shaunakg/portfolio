// [slug].js

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client';
import styles from '../../styles/Project.module.css';
import Head from 'next/head';
import Header from '../../components/header';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Project = (props) => {
  const { 
    title = 'srg.codes project',
    projectimage,
    shortdescription = "A innovative project on https://srg.codes",
    articlecontent,
    authors = 'Shaunak Gadkari',
    builtwithtitle,
    builtwithimage,
    goLink,
    sourceLink,
    slug
  } = props;

  return (
    <>

    <Head>

      <title>{`${title} | Shaunak G - Web Developer`}</title>
      <meta name="title" content={`${title} | Shaunak G - Web Developer`} />
      <meta name="description" content={shortdescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://srg.codes/project/" + slug.current} />
      <meta property="og:title" content={`${title} | Shaunak G - Web Developer`} />
      <meta property="og:description" content={shortdescription} />
      <meta property="og:image" content={urlFor(projectimage).url()} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={"https://srg.codes/project/" + slug.current} />
      <meta property="twitter:title" content={`${title} | Shaunak G - Web Developer`} />
      <meta property="twitter:description" content={shortdescription} />
      <meta property="twitter:image" content={urlFor(projectimage).url()} />

    </Head>

    <Header/>

    <main className={styles.wrapper}>
      <article className={styles.article}>
        <h1 className={styles.bigTitle} >{title}</h1>

        <span className={styles.authors} >Created by {authors.join(", ")}</span><br/>

        <img
          className={styles.mainImg}
          src={urlFor(projectimage).url()}
        />

        <div className={styles.goButtonContainer}>
          <a className={[styles.button, styles.goButton].join(" ")} href={goLink}>Go to project</a>
          <a className={[styles.button, styles.sourceButton].join(" ")} href={sourceLink}>View source code</a>
        </div>

        <ul className={styles.built} aria-label="Built with">
          {

            builtwithtitle.map((e, i) => (
              <li key={i} className={styles.technology}>
                <img src={urlFor(builtwithimage[i]).height(50).url()}/> {e}
              </li>
            ))

          }
        </ul>

        <BlockContent
          blocks={articlecontent}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />

      </article>
    </main>

    </>
  )
}

const query = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  "authors": author[]->name,
  "projectimage": mainImage,
  "shortdescription": description,
  articlecontent,
  "builtwithtitle": builtwith[]->title,
  "builtwithimage": builtwith[]->mainImage,
  "goLink": publishLink,
  "sourceLink": codeLink,
  "slug": slug
}`

Project.getInitialProps = async function(context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Project