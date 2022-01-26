import {
    Box,
    Center,
    Container,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
  
  const Footer: NextPage = () => {
    return (
      <Box bg={"gray.50"}>
        <Container maxW={"container.xl"} py={4}>
          <Center>
            <Text>© 2022 Maxim Hüsler. All rights reserved</Text>
          </Center>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  