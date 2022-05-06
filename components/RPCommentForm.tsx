import { Avatar, Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import RPButton from "./RPButton"

type CommentFormProps = {

}

export type CommentType = {
    id: string,
    content: {
        username: string
        notes: string
        date: string,
    }
}

export const CommentDisplay = ({comment}: {comment: CommentType }) => {
    return (
        <div style={{ boxShadow:"0 2px 5px 2px rgba(0, 0, 0, 0.2)" }}>
            <div key={comment.id} style={{padding: "1rem 1rem 0rem 1rem", borderRadius: "5px"}}>
            <span style={{display: "flex", justifyContent: "space-between"}}><b style={{fontSize: "18px", lineHeight: "18px"}}><Avatar size="xs"></Avatar> {comment.content.username}</b> <i style={{fontSize: "12px"}}>{comment.content.date}</i></span>
            </div>
            <p style={{ background:"white", padding:"1rem"}}>{comment.content.notes}</p>
        </div>
    )
}

export function RPCommentForm({}: CommentFormProps) {
    const [username, setUsername] = useState("Anonymous")
    const [body, setBody] = useState("something to say...")

    const [isLoading, setIsLoading] = useState(false)

    const handleSetUsername = (e: any) => setUsername(e.target.value)
    const handleSetBody = (e: any) => setBody(e.target.value)
  
    const isErrorBody = body === ""
  
    const submit = async () => {
        console.log("submit", { username, body })
        setIsLoading(true)
    }

    return (
        <Box textAlign="center" margin="auto">
            <FormControl isInvalid={isErrorBody}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleSetUsername}
                    border="solid 1px black !important"
                    size="sm"
                />
            </FormControl>
            <br />
            <FormControl>
                <Textarea
                    id="body"
                    value={body}
                    onChange={handleSetBody}
                    border="solid 1px black !important"
                />
            </FormControl>

            <RPButton
                border="none"
                variant="solid"
                colorScheme="teal"
                mt={4}
                isLoading={isLoading}
                loadingText="Submitting..."
                isDisabled={isErrorBody}
                onClick={submit}
                m={4}
            >
                SUBMIT
            </RPButton>
        </Box>
    )
}

export default {
    Form: RPCommentForm,
    DisplayComment: CommentDisplay
}