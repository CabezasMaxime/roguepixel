import { Box } from "@chakra-ui/react";
import Image from 'next/image'

export default function RPMDXImage(props: any) {
    return (
        <Box position="relative" display="block" textAlign="center" padding={["0", null, "0 5%", "0 10%", "0 25%"]}>
          <Image src={props.src} sizes="50vw" layout="responsive" width={"1280px"} height={"720px"} objectFit="cover" alt={props.alt}></Image>
          <i style={{position: "relative", top: "0", textAlign: "center", fontSize: "12px", color: "grey"}}>{props.alt}</i>
        </Box>
    )
}