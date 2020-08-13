import '../styles/globals.css'
import Head from 'next/head';
import firebase from '../firebase/firebase';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width' />
      <meta name='fb:app_id' content="298798058120939" />
      <script src="https://cdn.srg.codes/scripts/easter_egg.min.js"></script>
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
