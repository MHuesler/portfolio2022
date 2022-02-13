import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contact: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <Head>
                <title>Maxim Hüsler | Contact</title>
                <meta name='description' content='Contact Maxim Hüsler.'></meta>
            </Head>
            <Nav></Nav>
            <Flex direction={'column'} flex={1}>
                <Container maxW={'container.xl'}>
                    <Heading as={'h1'} mb={3}>contact</Heading>
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