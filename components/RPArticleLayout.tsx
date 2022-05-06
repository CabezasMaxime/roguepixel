import { Box } from "@chakra-ui/react";
import Head from "next/head";

export function RPArticleLayout({ children, meta }: any) {
  return (
    <Box width={"100%"}>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
        </Head>
        <Box
          bgColor="gray.100"
          boxShadow="0 2px 10px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0.2)"
          marginRight={[0, 0, 0, 0, "2rem"]}
          padding="0 1rem"
        >
          {children}
        </Box>
    </Box>
  )
}

export default RPArticleLayout;