import { Box, Text } from "@chakra-ui/react";
import { FrontMatter } from "../utils/mdxFetcher";
import RPTagsList from "./RPTagList";
import Link from "next/link";
import Image from "next/image"

type RPArticleCardProps = {
    post: FrontMatter;
    router: any;
}

export default function RPArticleCard({ router, post }: RPArticleCardProps) {

    return (
        <Box
            borderRadius="0.2rem"
            overflow="hidden"
            boxShadow="rgba(0, 0, 0, 0.3) 0 -5px 5px -2px, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px -5px 0px inset;"
            bgColor="white"
            transition="250ms"
            _hover={{
              bgGradient: "linear(to-b, transparent 0%, transparent 50%, rgba(0, 100, 255, 0.2) 100%)",
              boxShadow: "rgba(0, 0, 255, 0.3) 0 -5px 5px -2px, rgba(0, 0, 255, 0.4) 0px 2px 4px, rgba(0, 0, 255, 0.3) 0px 7px 13px -3px, rgba(0, 0, 255, 0.5) 0px -5px 0px inset;",
              cursor: "pointer"
            }}
        >

        <div style={{position: "relative", display: "block", height: "auto"}}>
          <Image
            style={{
              borderBottom: "solid 1px black"
            }}
            layout="responsive"
            src={post.previewImage}
            alt={post.title}
            width="1280px"
            height="720px"
            objectFit="cover"
            onClick={() => {
              router.push("/articles/" + post.slug)
            }}
          />
        </div>
        
        <Box p={"0 1rem 1rem 1rem"}>
          <RPTagsList tags={post.tags} />
          <Link href={"/articles/"+post.slug}><a><h2 style={{lineHeight: "25px"}}>{post.title}</h2></a></Link>
          <Text
            noOfLines={3}
            as="em"
            onClick={() => {
              router.push("/articles/" + post.slug)
            }}
          >
            {post.description}
          </Text>
        </Box>

      </Box>
    )
}