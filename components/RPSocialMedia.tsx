import { Box, Flex, HStack, Icon } from "@chakra-ui/react";
import { FaDiscord, FaYoutube } from "react-icons/fa";

export default function RPSocialMedia({ size }: { size?: "sm" | "md" | "lg" }) {
    let bordersize = "40px"
    let logoSize = "32px"
    let borderRadius = "10px"

    if(size === "sm") {
        bordersize = "20px"
        logoSize = "16px"
        borderRadius = "5px"
    } else if(size === "md") {
        bordersize = "32px"
        logoSize = "24px"    
        borderRadius = "7px"    
    } else if(size === "lg") {
        bordersize = "40px"
        logoSize = "32px"
        borderRadius = "10px"
    }

    return (
        <Box>
            <HStack>
                <Flex justifyContent="center" alignItems="middle" w={bordersize} h={bordersize} bg="#5663F7" borderRadius={borderRadius}>
                    <Icon as={FaDiscord} fontSize={logoSize} color="white" m="auto" />
                </Flex>
                <Flex justifyContent="center" alignItems="middle" w={bordersize} h={bordersize} bg="red" borderRadius={borderRadius}>
                    <Icon as={FaYoutube} fontSize={logoSize} color="white" m="auto" />
                </Flex>
            </HStack>
        </Box>
    )
}