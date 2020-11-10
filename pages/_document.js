import Document, { Html, Head, Main, NextScript } from 'next/document'
import QRCode from 'qrcode.react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-AU">

        <Head>

            <meta charSet='utf-8' />

            <link rel="manifest" href="/manifest.json" />
            <link href='https://cdn.srg.codes/images/icon/icon-192.png' rel='icon' type='image/png' sizes='192x192' />
            <link href='https://cdn.srg.codes/images/icon/icon-512.png' rel='icon' type='image/png' sizes='512x512' />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#000000"/>

        </Head>

        <body>
          
          <Main />
          <NextScript />

          {/* <noscript>
            <img src="https://srg-analytics.herokuapp.com/ingress/d9879e68-0f0a-43b1-80c6-8130f4255b6a/pixel.gif" />
          </noscript>
          <script src="https://srg-analytics.herokuapp.com/ingress/d9879e68-0f0a-43b1-80c6-8130f4255b6a/script.js"></script> */}


        </body>

      </Html>
    )
  }
}

export default MyDocument