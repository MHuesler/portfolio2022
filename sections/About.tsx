import {
    Box,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
import Nav from "../components/Nav";
  
  const About: NextPage = () => {
    return (
      <Center id="about">
          <VStack spacing={15}>
            <Heading as={'h2'}>About</Heading>
            <Container maxW={'container.sm'} bgColor={'gray.300'} p={5} rounded={10}>
                <SimpleGrid columns={3} spacing={10}>
                    <Stat>
                        <StatLabel>Gamertag</StatLabel>
                        <StatNumber>Maxim Hüsler</StatNumber>
                    </Stat>
                    <Stat>
                        <StatLabel>Time played</StatLabel>
                        <StatNumber>174299 hours</StatNumber>
                    </Stat>
                    <Stat>
                        <StatLabel>Origin</StatLabel>
                        <StatNumber>Switzerland</StatNumber>
                    </Stat>
                </SimpleGrid>
            </Container>
          </VStack>
      </Center>
    );
  };
  
  export default About;
  