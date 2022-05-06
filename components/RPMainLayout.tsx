import { Box, Flex, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import RPFooter from "./RPFooter"
import RPHeader from "./RPHeader"
import RPNavbarButtoned from "./RPNavbarButtoned"

export default function RPMainLayout({children}: {children: ReactNode}) {
    return (
        <Box padding="2rem 2rem 0 2rem" bgGradient="linear(to-t, cyan.900 0%, cyan.100 100%)">
            {/* <RPNavbar /> */}
            <RPNavbarButtoned />
            <RPHeader />
            <Flex width={["100%", "100%", "80%"]} m="auto" flexWrap="wrap" flexDirection={"row"}>
                <Box p={0} width="100%" flex={["100% 0", "100% 0", "100% 0", "4 0", "4 0", "4 0"]}>{children}</Box>
                <Box bgGradient="linear(160deg, green.200 0%, blue.500 100%)" flex="1 0" mt={[5, 5, 5, 0, 0, 0]} boxShadow="2px 5px 8px 5px rgba(0, 0, 0, 0.2)">
                    <Text p={4}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ipsam veritatis est doloremque aliquid tempora tempore sapiente optio? Modi perspiciatis, illum delectus odio accusantium quod quaerat sint adipisci ullam pariatur.
                    </Text>
                </Box>
            </Flex>
            <RPFooter />
        </Box>
    )
}