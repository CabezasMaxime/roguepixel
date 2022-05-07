import { Box, Flex, HStack, Icon, IconButton } from "@chakra-ui/react";
import { FaDiscord, FaYoutube } from "react-icons/fa";

export default function RPSocialMedia({ size }: { size?: "sm" | "md" | "lg" }) {
    let bordersize = 40
    let logoSize = 32
    let borderRadius = 10

    if(size === "sm") {
        bordersize = 20
        logoSize = 16
        borderRadius = 5
    } else if(size === "md") {
        bordersize = 32
        logoSize = 24    
        borderRadius = 7    
    } else if(size === "lg") {
        bordersize = 40
        logoSize = 32
        borderRadius = 10
    }

    // TODO
    // Add Discord and Youtube links

    return (
        <Box>
            <HStack>
                <Flex 
                    justifyContent="center"
                    alignItems="middle"
                    bg="#5663F7"
                    borderRadius={`${borderRadius}px`}
                    display="flex"
                    boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -5px 0px inset;"}
                    height={`${bordersize+5}px`}
                    width={`${bordersize+5}px`}
                    textShadow="2px 2px 1px rgba(0, 0, 0, 0.2)"
                    border="solid 1px rgba(0, 0, 0, 0.2)"
                    transition="50ms"
                
                    _hover={{
                        textShadow: "none",
                        transform: "translateY(1px)",
                        height: `${bordersize+5-2}px`,
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 4px, rgba(0, 0, 0, 0.3) 0px 0px 13px -3px, rgba(0, 0, 0, 0.2) 0px 3px 0px inset;",
                        cursor: "pointer",
                        border:"solid 1px rgba(0, 0, 0, 0.2)",
                        borderBottom: "none",
                    }}
                    
                    _focus={{
                        textShadow: "none",
                        transform: "translateY(1px)",
                        height: `${bordersize+5-2}px`,
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 4px, rgba(0, 0, 0, 0.3) 0px 0px 13px -3px, rgba(0, 0, 0, 0.2) 0px 3px 0px inset;",
                        cursor: "pointer",
                        border:"solid 1px rgba(0, 0, 0, 0.2)",
                        borderBottom: "none",
                    }}
                
                    _active={{
                        textShadow: "none",
                        transform: "translateY(5px)",
                        height: "40px",
                        bgGradient: "linear(to-b, transparent 0%, transparent 60%, rgba(0, 100, 255, 0.2) 100%)",
                        boxShadow: "rgba(0, 0, 255, 0.4) 0px 2px 4px, rgba(0, 0, 255, 0.3) 0px 7px 13px -3px",
                        cursor: "pointer",
                    }}
                >
                    <Icon as={FaDiscord} fontSize={logoSize} color="white" m="auto" transform="translateY(-2px)" />
                </Flex>
                <Flex
                    justifyContent="center"
                    alignItems="middle"
                    bg="red"
                    borderRadius={`${borderRadius}px`}
                    display="flex"
                    boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -5px 0px inset;"}
                    height={`${bordersize+5}px`}
                    width={`${bordersize+5}px`}
                    textShadow="2px 2px 1px rgba(0, 0, 0, 0.2)"
                    border="solid 1px rgba(0, 0, 0, 0.2)"
                    transition="50ms"
                
                    _hover={{
                        textShadow: "none",
                        transform: "translateY(1px)",
                        height: `${bordersize+5-2}px`,
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 4px, rgba(0, 0, 0, 0.3) 0px 0px 13px -3px, rgba(0, 0, 0, 0.2) 0px 3px 0px inset;",
                        cursor: "pointer",
                        border:"solid 1px rgba(0, 0, 0, 0.2)",
                        borderBottom: "none",
                    }}
                    
                    _focus={{
                        textShadow: "none",
                        transform: "translateY(1px)",
                        height: `${bordersize+5-2}px`,
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 4px, rgba(0, 0, 0, 0.3) 0px 0px 13px -3px, rgba(0, 0, 0, 0.2) 0px 3px 0px inset;",
                        cursor: "pointer",
                        border:"solid 1px rgba(0, 0, 0, 0.2)",
                        borderBottom: "none",
                    }}
                
                    _active={{
                        textShadow: "none",
                        transform: "translateY(5px)",
                        height: "40px",
                        bgGradient: "linear(to-b, transparent 0%, transparent 60%, rgba(0, 100, 255, 0.2) 100%)",
                        boxShadow: "rgba(0, 0, 255, 0.4) 0px 2px 4px, rgba(0, 0, 255, 0.3) 0px 7px 13px -3px",
                        cursor: "pointer",
                    }}
                >
                    <Icon as={FaYoutube} fontSize={logoSize} color="white" m="auto" transform="translateY(-2px)" />
                </Flex>
            </HStack>
        </Box>
    )
}