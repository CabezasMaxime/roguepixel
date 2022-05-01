import { FrontMatter, getFrontMatterByTag } from '../../utils/mdxFetcher'
import Tags from '../../config/tags'
import { NextPage } from 'next'

type TagsFilterPageProps = {
  posts: FrontMatter[]
  tag: string
}

const TagsFilterPage: NextPage<TagsFilterPageProps> = ({ tag, posts }) => {
  //console.log("posts", posts)

  return (
    <div className="wrapper">
      <h1>{tag}</h1>
      {
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          )
        })
      }
    </div>
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
  //const postsData: FrontMatter[] = await getFrontMatterByTag(params.tag)
  
  return { 
    props: { 
      posts: [], //postsData,
      tag: params.tag
    },
    revalidate: 10
  }
}

export default TagsFilterPage