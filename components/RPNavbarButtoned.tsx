import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Slide,
    Collapse,
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import RPSocialMedia from './RPSocialMedia';

const Links = [{
    label: "Home",
    slug: "/"
  },
  {
    label: "Tests",
    slug: "/tags/tests"
  },
  {
    label: "Contact",
    slug: "contact"
  },
];

// TODO - Create gaming button components
const NavLink = ({ link }: {link: {label: string, slug: string} }) => (
  <Link
    display="flex"
    padding="1rem 0 1.5rem 0"
    boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -10px 0px inset;"}
    bg="white"
    height="50px"
    width="140px"
    alignItems="center"
    justifyContent="center"
    fontWeight= "bolder"
    fontSize="25px"
    textShadow="2px 2px 1px rgba(0, 0, 0, 0.2)"
    border="solid 1px rgba(0, 0, 0, 0.2)"
    borderRadius="13px"
    transition="150ms"

    _hover={{
        textShadow: "none",
        transform: "translateY(2.5px)",
        height: "45px",
        bgGradient: "linear(to-b, transparent 0%, transparent 60%, rgba(0, 100, 255, 0.2) 100%)",
        boxShadow: "rgba(0, 0, 255, 0.4) 0px 2px 4px, rgba(0, 0, 255, 0.3) 0px 7px 13px -3px, rgba(0, 0, 255, 0.5) 0px -5px 0px inset;",
        cursor: "pointer",
        border:"solid 1px rgba(0, 0, 0, 0.2)",
        borderBottom: "none",
    }}
    
    _focus={{
        textShadow: "none",
        transform: "translateY(2.5px)",
        height: "45px",
        bgGradient: "linear(to-b, transparent 0%, transparent 60%, rgba(0, 100, 255, 0.2) 100%)",
        boxShadow: "rgba(0, 0, 255, 0.4) 0px 2px 4px, rgba(0, 0, 255, 0.3) 0px 7px 13px -3px, rgba(0, 0, 255, 0.5) 0px -5px 0px inset;",
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

    href={`${link.slug}`}>
    {link.label.toUpperCase()}
  </Link>
);

export default function RPNavbarButtoned() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Box m="auto" width={["100%", "100%", "80%"]}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            zIndex="1"
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={{base: 0, sm: 8}} w="100%" justifyContent={{base: "flex-end", lg: "space-between"}} alignItems={'center'}>

            <Box position={{base: "relative", sm: "absolute", lg: "relative"}} w={{base: "100%", lg: "auto"}} left="0" textAlign="center">
              <Link href="/">Logo</Link>
            </Box>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', lg: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} link={link} />
              ))}
            </HStack>
            <RPSocialMedia size="lg" />
          </HStack>
        </Flex>
        
        <Collapse in={isOpen} unmountOnExit>
          <Stack as={'nav'} p={2} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.label} link={link} />
              ))}
          </Stack>
        </Collapse>

      </Box>
    );
}