// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data: any = req.body
    console.log("body", data)

    const automatedUrl = "https://hooks.airtable.com/workflows/v1/genericWebhook/app8Cl05qb0RFX88k/wfl1gge7uVhgo63cA/wtrLCYiOYfpKXpFfQ"

    await fetch(automatedUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fields: {
                Username: "TOTO",
            },
        }),
    })
    .then(response => {
        response.json()
    })
    .then(data => {
        res.status(200).json({
            name: "John Doe",
        })
    })
}
