import { Box, Flex, HStack } from "@chakra-ui/react";
import RPSocialMedia from "./RPSocialMedia";

export default function RPFooter() {
    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            bg={"gray.100"}
            boxShadow={"rgba(0, 0, 0, 0.4) 0px -2px 4px, rgba(0, 0, 0, 0.3) 0px -7px 13px -3px, rgba(0, 0, 0, 0.2) 0px 3px 0px inset;"}
            m="2rem auto 0 auto"
            padding="1rem 5rem" 
            w={["100%", "100%", "80%"]}
            color="gray.600"
        >
            <Box>
                <Box as="ul" listStyleType="none" p="0" m="0" fontSize="14px">
                    <li><i>Link 1</i></li>
                    <li><i>Link 1</i></li>
                </Box>
            </Box>
            <Box>Logo</Box>
            <RPSocialMedia size="md" />
        </Flex>
    )
}