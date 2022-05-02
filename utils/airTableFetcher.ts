const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app8Cl05qb0RFX88k');

export async function getCommentsFromAirTable(slug: string) {
    let comments: any = []
    try {
        comments = await base("Commentaires").select({
            view: "Grid view",
            filterByFormula: `AND({Slug} = '${slug}', {Status} = 'Validate')`,
        })
        .all()
    } catch(err) {
        console.error(err)
    }

    if(comments.length <= 0) {
        return []
    }
    
    comments = comments.map((comment: any) => {
        return {
            id: comment.id,
            content: {
                slug: comment.fields.Slug,
                notes: comment.fields.Notes,
                status: comment.fields.Status,
                username: comment.fields.Username,
                date: comment.fields.Date,
            },
        }
    })

    // sort comment by date
    comments.sort((a: any, b: any) => {
        return new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
    })

    return comments
}