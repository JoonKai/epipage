import React from 'react'
import {Box,Center,Stack,Heading,Flex,Text, Button,useDisclosure} from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons";

const NavbarElement = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="#093687"
      color="white"
      {...props}
    >
      <Flex align="center" mr={7}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          EPI
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Cost</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </Stack>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      </Box>
    </Flex>
  );
}

export default NavbarElement