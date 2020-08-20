// [slug].js

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client';
import styles from '../../styles/Project.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function truncate( str, n, useWordBoundary ){
  if (str.length <= n) { return str; }
  const subString = str.substr(0, n-1);
  return subString.substr(0, subString.lastIndexOf(" ")) + "...";
};

const Project = (props) => {
  const { 
    title = 'srg.codes project',
    projectimage,
    shortdescription = "An innovative project on https://srg.codes",
    articlecontent,
    authors = 'Shaunak Gadkari',
    builtwithtitle,
    builtwithimage,
    goLink,
    sourceLink,
    slug
  } = props;

  const shareBody = truncate(`${title}: ${shortdescription}`, 250, true);
  const shareURL = "https://srg.codes/projects/" + slug.current;

  const tweetVia = "shaunak_g";
  const fbAppId = "298798058120939";

  const tweetLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareURL)}&via=${encodeURIComponent(tweetVia)}&text=${encodeURIComponent(shareBody)}`;
  const fbLink = `https://www.facebook.com/dialog/share?app_id=${encodeURIComponent(fbAppId)}&href=${encodeURIComponent(shareURL)}&quote=${encodeURIComponent(shareBody)}`;

  return (
    <>

    <Head>

      <title>{`${title} | Shaunak G - Web Developer`}</title>
      <meta name="title" content={`${title} | Shaunak G - Web Developer`} />
      <meta name="description" content={shortdescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://srg.codes/projects/" + slug.current} />
      <meta property="og:title" content={`${title} | Shaunak G - Web Developer`} />
      <meta property="og:description" content={shortdescription} />
      <meta property="og:image" content={urlFor(projectimage).url()} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={"https://srg.codes/projects/" + slug.current} />
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
          alt={`Main image of the ${title} project.`}
        />

        <div className={styles.goButtonContainer}>
          <a className={[styles.button, styles.goButton].join(" ")} href={goLink}>Go to project</a>
          <a className={[styles.button, styles.sourceButton].join(" ")} href={sourceLink}>View source code</a>
        </div>

        <ul className={styles.built} aria-label="Built with">
          {

            builtwithtitle.map((e, i) => (
              <li key={i} className={styles.technology}>
                <img alt={`${e} logo`} src={urlFor(builtwithimage[i]).height(50).url()}/> {e}
              </li>
            ))

          }
        </ul>

        <BlockContent
          blocks={articlecontent}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />

        <a href={shareURL}>
          <div className={[styles.share, styles.author].join(" ")}>
            <p>Writeup by Shaunak Gadkari. Contact me at hello@srg.codes for a free quote and assessment of your web development needs.</p>
            <img src={"https://cdn.srg.codes/images/icon/icon.svg"} />
          </div>
        </a>

        <a href={tweetLink}>
          <div className={styles.share}>
            <p>I work hard on these projects and writeups. If you liked this one, I'd appreciate if you shared it on Twitter. Just click here.</p>
            <img src={"https://cdn.srg.codes/images/external/social/Twitter_Logo_WhiteOnBlue.svg"} />
          </div>
        </a>

        <a href={fbLink}>
          <div className={[styles.share, styles.facebook].join(" ")}>
            <p>If Facebook is more your style, you can share it there too. Just click here.</p>
            <img src={"https://cdn.srg.codes/images/external/social/f_logo_RGB-Blue_144.png"} />
          </div>
        </a>

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