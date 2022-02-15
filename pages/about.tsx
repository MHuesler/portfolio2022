import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <Head>
                <title>Maxim Hüsler | About</title>
                <meta name='description' content='About Maxim Hüsler.'></meta>
            </Head>
            <Nav></Nav>
            <Flex direction={'column'} flex={1}>
                <main>
                    <Container maxW={'container.xl'}>
                        <Heading as={'h1'} mb={3}>about</Heading>
                        <Box mb={10}>
                            <Text>Hey. I&apos;m Maxim an 18 year old Software Developer from Switzerland 🌄.</Text>
                            <Text>In my free time I like to <i>design and develop software</i>, <i>trade equity</i>, <i>go on road trips</i> and <i>play video games</i>.</Text>
                        </Box>
                        <Box mb={10}>
                            <Heading fontSize={'2xl'} mb={2}>Technical Skills</Heading>
                            <Heading fontSize={'xl'}>Frontend</Heading>
                            <Text>Angular, React, NextJS, ASP.NET Razor, Flutter</Text>
                            <Heading fontSize={'xl'}>Backend</Heading>
                            <Text>REST, .NET, EntityFramework, OData, OAuth, ExpressJS, Gorilla/Mux</Text>
                            <Heading fontSize={'xl'}>Languages</Heading>
                            <Text>C#, Typescript, JavaScript, HTML5, CSS3, Golang, Dart</Text>
                            <Heading fontSize={'xl'}>Other</Heading>
                            <Text>Linux, NGINX, Node, ReactiveX, PostgreSQL</Text>
                        </Box>
                        <Box mb={10}>
                            <Heading fontSize={'2xl'}>Education</Heading>
                            <HStack spacing={10}>
                                <Text>2021 - 2022</Text>
                                <Text>Fullstack Developer (Internship) at 2sic</Text>
                            </HStack>
                            <HStack spacing={10}>
                                <Text>2018 - 2022</Text>
                                <Text>IMS (Informatikmittelschule) at Kantonsschule Sargans</Text>
                            </HStack>
                        </Box>
                        <Box mb={10}>
                            <Heading fontSize={'2xl'}>Certificates</Heading>
                            <HStack spacing={10}>
                                <Text>2021 - 2021</Text>
                                <Text>C1 Cambridge English Advanced (CAE)</Text>
                            </HStack>
                        </Box>
                    </Container>
                </main>
            </Flex>
            <Footer></Footer>
        </Flex>
    )
}


export default About