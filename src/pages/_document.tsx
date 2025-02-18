// Libs
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/images/favicon.ico"/>
        <title>Tremor Dashboard</title>
        <meta name="description" content="Tremor Dashboard generated by create next app"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
