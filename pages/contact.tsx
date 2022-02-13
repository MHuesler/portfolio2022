import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contact: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <Nav></Nav>
            <Flex direction={'column'} flex={1}>
                <Container maxW={'container.xl'}>
                    <Heading mb={3}>contact</Heading>
                    <HStack spacing={3}>
                        <Text>Send me an E-Mail:</Text>
                        <a href="mailto:work@maximhuesler.com">work@maximhuesler.com</a>
                    </HStack>
                </Container>
            </Flex>
            <Footer></Footer>
        </Flex>
    )
}


export default Contact