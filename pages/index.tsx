import { SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import RPArticleCard from '../components/RPArticleCard'
import RPTitle from '../components/RPTitle'
import { FrontMatter, getAllFrontMatter } from '../utils/mdxFetcher'

type HomeProps = {
  posts: FrontMatter[]
}

const Home: NextPage<HomeProps> = ({posts}) => {
  const router = useRouter()

  posts = [...posts, ...posts, ...posts]

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={["40px", null, null, "40px 2rem"]} width={["100%", "100%", "100%"]} paddingRight={[0, 0, 0, "2rem", "2rem", "2rem"]} m="auto">
        {
          posts.map((post: FrontMatter, postIndex: number) => (
            <RPArticleCard
              key={postIndex}
              post={post}
              router={router}
            />
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
