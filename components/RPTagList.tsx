import { HStack, Tag } from "@chakra-ui/react";
import Link from "next/link";

type TagsListProps = {
    tags: string[]
}

export default function RPTagsList({tags}: TagsListProps) {
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <HStack spacing={1} margin={"1rem 0"}>
            {
                tags.map((tag: string, tagIndex: number) => {
                    return (
                        <Tag size="sm" key={`tag-${tagIndex}`} variant="subtle" colorScheme="teal">
                            <Link key={tagIndex} href={`/tags/${tag}`}><a><i>{capitalizeFirstLetter(tag)}</i></a></Link>
                        </Tag>
                    )
                })
            }
        </HStack>
    )
}