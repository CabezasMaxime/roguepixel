import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import MyButton from '../components/RPButton'
import Image from 'next/image'

const components = {
  MyButton,
  img: (props: any) => (
    <span style={{display: "block", width: "100vw", textAlign: "center"}}>
      <Image src={props.src} layout="intrinsic" width={"800px"} height={"600px"} objectFit="contain" alt={props.alt}></Image>
      <br />
      <i style={{position: "relative", top: "-25px", textAlign: "center", fontSize: "12px", color: "grey"}}>{props.alt}</i>
    </span>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
