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


export async function getAllFrontMatter(): Promise<FrontMatter[]> {
    const postMetadata = await fetch(`${process.env.DOMAIN_URL}/api/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({filter: "*"})
    })
    .then(res => {
        return res.json()
    })
    .then((data: any) => {
        return data.postsMetadata
    })

    return postMetadata;
}

export async function getPageData(slug: string) {
    const postData = await fetch(`${process.env.DOMAIN_URL}/api/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({filter: "slug", slug})
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data.source
    })

    return postData
}

export async function getFrontMatterByTag(tag: string) {
    const postData = await fetch(`${process.env.DOMAIN_URL}/api/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({filter: "tag", tag})
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data.postsMetadata
    })

    return postData
}