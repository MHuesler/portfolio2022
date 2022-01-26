import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp
