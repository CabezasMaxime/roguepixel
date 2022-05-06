import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllFrontMatter, getPageData, slugifyTitle } from '../../utils/mdxFetcher'
import CommentForm, { CommentType } from '../../components/RPCommentForm'
import RPArticleLayout from '../../components/RPArticleLayout'
import { getCommentsFromAirTable } from '../../utils/airTableFetcher'

export default function ArticlePage({ source, comments, slug }: any) {

  return (
    <RPArticleLayout meta={source}>
      <MDXRemote {...source} lazy={true} />
      <hr />
      <div style={{width: "50%", margin: "auto"}}>
        {
          comments.map((comment: CommentType) => {
            return <CommentForm.DisplayComment key={comment.id} comment={comment} />
          })
        }
        <CommentForm.Form slug={slug} />
      </div>
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
      comments: comments,
      slug: params.slug,
    },
    revalidate: 60
  }
}