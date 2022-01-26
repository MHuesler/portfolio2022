import {
    Box,
    Container,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
  
  const Footer: NextPage = () => {
    return (
      <Box bg={"gray.50"}>
        <Container maxW={"container.xl"} py={4}>
          <VStack spacing={15} align={'flex-start'}>
            <Text>© 2022 Maxim Hüsler. All rights reserved</Text>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  