// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import { FrontMatter, slugifyTitle } from '../../utils/mdxFetcher'
import matter from 'gray-matter'

type PostFrontMatterData = {
    postsMetadata: FrontMatter[]
}

type PostSource = {
    source: string | string[]
}
/*
    Body: {
        filter: "*" | "slug" | "tags",
        slug: string | string[] | undefined,
        tags: string[] | undefined
    }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostFrontMatterData | PostSource>
) {
    const data: any = req.body
    
    if(req.method !== "POST") {
        return res.status(405)
    }

    if(data.filter === "*") {
        const files = fs.readdirSync(`${process.cwd()}/mdx`)
        const postsMetadata: FrontMatter[] = files.map((file) => {
            const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
            return {
                ...data,
                slug: slugifyTitle(data.title) as string
            }
        })
        return res.status(200).json({postsMetadata})
    }

    if(data.filter === "slug" && data.slug != "" && data.slug != undefined) {
        const files = fs.readdirSync(`${process.cwd()}/mdx`)
        const fileName = files.find((file) => {
            const frontData = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
            return slugifyTitle(frontData.data.title) === data.slug
        })

        const source: string = fs.readFileSync(`${process.cwd()}/mdx/${fileName}`, "utf8")
        return res.status(200).json({source})
    }

    if(data.filter === "tag" && data.tag != "" && data.tag != undefined) {
        const files = fs.readdirSync(`${process.cwd()}/mdx`)
        const fileName = files.filter((file) => {
            const frontData = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
            return frontData.data.tags.includes(data.tag)
        })

        const postsMetadata: FrontMatter[] = fileName.map((file) => {
            const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
            return {
                ...data,
                slug: slugifyTitle(data.title) as string
            }
        })

        return res.status(200).json({postsMetadata})
    }

}
*/

