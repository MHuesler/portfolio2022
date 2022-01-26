import {
    Box,
    Center,
    Container,
    Heading,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
import Nav from "../components/Nav";
  
  const Landing: NextPage = () => {
    return (
      <Box h={"100vh"}>
          <Nav></Nav>
          <Container maxW="container.md">
            <Center h={500}>
                <VStack>
                    <Heading as='h1' size='xl'>Hi ✌️, I'm Maxim Hüsler</Heading>
                    <Text fontSize={'lg'}>A 18 year old<Text bgGradient='linear(to-l, #4568DC, #B06AB3)' bgClip='text' display={'inline'} fontWeight={700}> Software Developer </Text>from Switzerland
                    </Text>
                </VStack>
            </Center>
          </Container>
      </Box>
    );
  };
  
  export default Landing;
  