import { FrontMatter } from "../utils/mdxFetcher";

export type MDXPageProps = {
    frontMatter: FrontMatter,
    source: string
}