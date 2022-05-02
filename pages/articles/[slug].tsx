import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllFrontMatter, getPageData, slugifyTitle } from '../../utils/mdxFetcher'
import CommentForm from '../../components/RPCommentForm'
import RPArticleLayout from '../../components/RPArticleLayout'
import { getCommentsFromAirTable } from '../../utils/airTableFetcher'

export default function ArticlePage({ source, comments }: any) {

  return (
    <RPArticleLayout meta={source}>
      <MDXRemote {...source} lazy={true} />
      <div style={{width: "50%", margin: "auto"}}>
        {
          comments.map((comment: any) => (
            <div key={comment.id} style={{background: "white", padding: "0.5rem", borderRadius: "5px"}}>
              <span style={{display: "flex", justifyContent: "space-between"}}><b>{comment.content.username}</b> <i style={{fontSize: "12px"}}>{comment.content.date}</i></span>
              <hr />
              <p>{comment.content.notes}</p>
            </div>
          ))
        }
      </div>
      <CommentForm />
    </RPArticleLayout>
  )
}

export async function getStaticPaths() {
  const frontMatterDatas = await getAllFrontMatter()

  const titles: string[] = frontMatterDatas.map((data: any) => data.title)
  const slugs = slugifyTitle(titles) as string[]

  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}: any) {
  const source = await getPageData(params.slug)
  const mdxSource = await serialize(source, {parseFrontmatter: true})
  const comments = await getCommentsFromAirTable(params.slug)

  return { 
    props: { 
      source: mdxSource,
      comments: comments
    },
    revalidate: 60
  }
}