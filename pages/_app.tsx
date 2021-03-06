import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp

