import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import RPButton from "./RPButton"

type CommentFormProps = {

}

export default function RPCommentForm({}: CommentFormProps) {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e: any) => setInput(e.target.value)
  
    const isErrorUsername = input === ""
  
    const submit = async () => {
        setIsLoading(true)
    }

    return (
        <Box textAlign="center" maxWidth="300px" margin="auto">
            <FormControl isInvalid={isErrorUsername}>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input
                    id="username"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                />
                {!isErrorUsername ? (
                <FormHelperText>
                    Enter the username you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage>Username is required.</FormErrorMessage>
                )}
            </FormControl>

            <FormControl>
                <Textarea
                    id="body"
                    value={input}
                    onChange={handleInputChange}
                />
            </FormControl>

            <RPButton
                border="none"
                variant="solid"
                colorScheme="teal"
                mt={4}
                isLoading={isLoading}
                loadingText="Submitting..."
                isDisabled={isErrorUsername}
                onClick={submit}
            >
                SUBMIT
            </RPButton>
        </Box>
    )
}