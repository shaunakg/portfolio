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

        </body>

      </Html>
    )
  }
}

export default MyDocument