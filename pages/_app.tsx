import '../styles/globals.css'
import { Box, ChakraProvider, Text } from "@chakra-ui/react"
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import RPButton from '../components/RPButton'
import RPMDXImage from '../components/RPMDXImage'
import RPMainLayout from '../components/RPMainLayout'
import RPTitle from '../components/RPTitle'

const components = {
  RPButton,
  RPMDXImage,
  h1: ({children}: any) => (
    <RPTitle padding={["1rem 0", null, null, "2rem 10rem"]} m="0 auto">{children}</RPTitle>
  ),
  p: ({children}: any) => (
    <Text as="p" fontSize={"16px"}>{children}</Text>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false}>
      <MDXProvider components={components}>

        <RPMainLayout>
          <Component {...pageProps} />
        </RPMainLayout>

      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
