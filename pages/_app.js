import '../styles/globals.css'
import Head from 'next/head';
import firebase from '../firebase/firebase';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width' />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
