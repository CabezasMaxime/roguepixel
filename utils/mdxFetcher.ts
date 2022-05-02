import fs from "fs"
import matter from "gray-matter"

export type FrontMatter = {
    [key: string]: any
    slug: string
}

export function slugifyTitle(titles: string | string[]): string | string[] {
    if(typeof titles === "string") {
        const slug = titles.toLowerCase().replace(/['", ]/g, '-')
        return slug
    }

    if(typeof titles === typeof [""]) {
        const slugs = titles.map(title => title.toLowerCase().replace(/['", ]/g, '-'))
        return slugs
    }

    return []
}

export async function getAllFrontMatter(): Promise<any> {
    const files = fs.readdirSync(`${process.cwd()}/mdx`)
    const postsMetadata: FrontMatter[] = files.map((file) => {
        const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
        return {
            ...data,
            slug: slugifyTitle(data.title) as string
        }
    })
    return postsMetadata
}

export async function getPageData(slug: string) {
    const files = fs.readdirSync(`${process.cwd()}/mdx`)
    const fileFilter = files.filter((file) => {
        const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
        return slugifyTitle(data.title) === slug
    })
    const source: string = fs.readFileSync(`${process.cwd()}/mdx/${fileFilter}`, "utf8")
    return source
}

export async function getFrontMatterByTag(tag: string) {
    const files = fs.readdirSync(`${process.cwd()}/mdx`)
    const fileName = files.filter((file) => {
        const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
        return data.tags.includes(tag)
    })

    const postsMetadata: FrontMatter[] = fileName.map((file) => {
        const { data } = matter(fs.readFileSync(`${process.cwd()}/mdx/${file}`, "utf8"))
        return {
            ...data,
            slug: slugifyTitle(data.title) as string
        }
    })

    return postsMetadata
}