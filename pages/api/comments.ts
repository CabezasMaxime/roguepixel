// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createCommentsOnAirtable } from '../../utils/airTableFetcher'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if(req.method == "POST") {
        let { username, body, slug } = req.body

        if(username.trim() == "") {
            username = "Anonymous"
        }
        
        let message = await createCommentsOnAirtable({username, body, slug})
        .then((res: any) => {
            return res.message
        })

        if(message === "success") {
            res.status(200).json({
                username,
                body
            })
        } else {
            res.status(200).json({
                error: "L'envoi du commentaire a échoué, veuillez réessayer plus tard"
            })
        }
    } else {
        res.status(200).json({
            error: "Not ok !"
        })
    }
}

