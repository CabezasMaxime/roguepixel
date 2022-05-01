import Head from "next/head";

export function ArticleLayout({Child, meta, content}: any) {

  return (
    <div>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
        </Head>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "auto", width: "80%"}}>
            <div style={{margin: "auto"}}>

            </div>
        </div>
    </div>
  )
}

export default ArticleLayout;