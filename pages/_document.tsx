import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'

class MyDocument extends Document {
    render() {
      return (
        <Html lang='en'>
          <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name='viewport' content="width=device-width, initial-scale=1"></meta>
          </Head>
          <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument