import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TagsList from '../components/RPTagList'
import { FrontMatter, getAllFrontMatter } from '../utils/mdxFetcher'

type HomeProps = {
  posts: FrontMatter[]
}

const Home: NextPage<HomeProps> = ({posts}) => {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world</h1>
        <SimpleGrid minChildWidth='350px' spacing='40px' padding={"1rem"} margin="1rem">
        {
          posts.map((post: FrontMatter, postIndex: number) => (
            <Box key={postIndex}>
              <div style={{position: "relative", display: "block", height: "250px"}}>
                <Image
                  src={post.previewImage}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <h2><Link href={"/articles/"+post.slug}><a>{post.title}</a></Link></h2>
              <TagsList tags={post.tags} />
              <Text noOfLines={3} isTruncated as="em">{post.description}</Text>
            </Box>
          ))
        }
        </SimpleGrid>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const postsData: FrontMatter[] = await getAllFrontMatter()

  return {
    props: {
      posts: postsData
    },
    revalidate: 3600
  }
}

export default Home
