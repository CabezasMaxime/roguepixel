import { Box, Flex } from "@chakra-ui/react"
import RPTitle from "./RPTitle"

export default function RPHeader() {
    return (
        <Flex borderRadius="5px" bg="gray.100" width="80%" m="2rem auto" height="300px" justifyContent="space-around" alignItems="center" padding="2rem 0" boxShadow="rgba(0, 0, 0, 0.3) 0 -5px 5px -2px, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px" bgGradient="linear(45deg, green.100 0%, cyan.200 100%)" background="black" bgImage={"https://res.cloudinary.com/dbpj25ne7/image/upload/co_rgb:ffffff,dn_0,e_pixelate:16,o_100/v1639848231/large_test_44c60be13a.jpg"} bgRepeat="no-repeat" bgSize="cover" bgPos="50% 0%">
            <RPTitle fontSize="60px" transform={"translateY(-60%)"} color="white">{`.: Rogue PxL :.`}</RPTitle>
            <Flex position="relative" maxW="300px" p={4} fontWeight="bolder" color="white" textShadow="0 1px 2px black">
                <span>
                    <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, adipisci maxime! Iusto illum dolores magni voluptates ullam fugit molestiae ducimus veritatis deleniti.</p>
                    <p style={{textAlign: "right"}}><i style={{textAlign: "right"}}>- Rogue pxl -</i></p>
                </span>
            </Flex>
        </Flex>
    )
}