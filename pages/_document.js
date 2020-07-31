import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>

            <link rel="icon" href="https://cdn.srg.codes/images/icon/icon-512.png" />

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

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument