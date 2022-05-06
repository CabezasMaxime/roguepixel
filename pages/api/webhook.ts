// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    [key: string]: any
    error?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { api_key, comment_id, status } = req.query

    if(api_key != process.env.WEBHOOK_API_KEY) {
        res.status(403).json({
            error: "Invalid API key"
        })
    }
    
    const automatedUrl = "https://hooks.airtable.com/workflows/v1/genericWebhook/app8Cl05qb0RFX88k/wfl1gge7uVhgo63cA/wtrLCYiOYfpKXpFfQ"

    await fetch(automatedUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fields: {
                ID: comment_id,
                Status: status,
            },
        }),
    })
    .then(response => {
        response.json()
    })
    .then(data => {
        res.status(200).json({data})
    })
}
