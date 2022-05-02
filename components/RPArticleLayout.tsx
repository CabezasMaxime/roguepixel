import { Box } from "@chakra-ui/react";
import Head from "next/head";

export function RPArticleLayout({ children, meta }: any) {
  return (
    <div>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
        </Head>
        <Box bgColor="grey" width={["100%", "100%", "80%"]} margin="auto" padding="0 1rem">
          {children}
        </Box>
    </div>
  )
}

export default RPArticleLayout;