import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllFrontMatter, getPageData, slugifyTitle } from '../../utils/mdxFetcher'

export default function ArticlePage({ source }: any) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} lazy={true} />
    </div>
  )
}

export async function getStaticPaths() {
  // get all slug by mdx
  const frontMatterDatas = await getAllFrontMatter()

  const titles: string[] = frontMatterDatas.map(data => data.title)
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
  
  return { 
    props: { 
      source: mdxSource 
    },
    revalidate: 10
  }
}