import { FrontMatter, getFrontMatterByTag } from '../../utils/mdxFetcher'
import Tags from '../../config/tags'
import { NextPage } from 'next'
import { SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import RPArticleCard from '../../components/RPArticleCard'
import RPTitle from '../../components/RPTitle'

type TagsFilterPageProps = {
  posts: FrontMatter[]
  tag: string
}

const TagsFilterPage: NextPage<TagsFilterPageProps> = ({ tag, posts }) => {
  //console.log("posts", posts)
  const router = useRouter()

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main>
      <RPTitle>{capitalizeFirstLetter(tag)}</RPTitle>
      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={["40px", null, null, "40px 2rem", "40px 5rem"]} width={["100%", "100%", "80%"]} m="auto">
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
  )
}

export async function getStaticPaths() {
  const tags = Tags
  const paths = tags.map(tag => ({ params: { tag } }))
  
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}: any) {
  const postsData: FrontMatter[] = await getFrontMatterByTag(params.tag)
  
  return { 
    props: { 
      posts: postsData,
      tag: params.tag
    },
    revalidate: 3600
  }
}

export default TagsFilterPage