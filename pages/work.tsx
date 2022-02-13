import {
    Box,
    Container, Flex, Heading, HStack, Image, Text
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

import { UrlObject } from 'url';
import Footer from "../components/Footer";

interface Project {
    title: string
    description: string
    employer: string
    technologies: string
    image: string
    siteUrl: string
    frontendGithub?: string
    backendGithub?: string
}

const projects: Project[] = [
    {
        title: 'Astrovote',
        employer: 'private sideproject',
        description: `Astrovote is a forum, where equiry traders can share their trade ideas. 
        Each post can be rated by other users. 
        Focus lies on technical analysis which often gets called trading astrology, thus the name astrovote.`,
        technologies: 'Angular13, RxJS, Taiga UI, .NET 6, Entity Framework, PostgreSQL, NGINX',
        siteUrl: 'https://astrovote.com',
        frontendGithub: 'https://github.com/MHuesler/astrovote-frontend',
        backendGithub: 'https://github.com/MHuesler/astrovote-backend',
        image: 'astrovote-home.png'
    }
]

const Project = ({project}: {project: Project}) => {
    return (
        <Box py="5">
            <Flex direction={{ base: 'column', md: 'row'}} gap={5}>
                <Box>
                    <a href="https://astrovote.com" rel="noreferrer" target={'_blank'}>
                        <Image borderRadius={'md'} shadow={'md'} src='astrovote-home.png' alt="Screenshot from astrovote homepage"></Image>
                    </a>
                </Box>
                <Box minW={'50%'}>
                    <HStack justifyContent={'space-between'}>
                        <Heading>{project.title}</Heading>
                        <Text>{project.employer}</Text>
                    </HStack>
                    <Text mb={5}>{project.description}</Text>
                    <Box mb={5}>
                        <Heading size={'sm'}>Techonologies:</Heading>
                        <Text>{project.technologies}</Text>
                    </Box>
                    <Box>
                        <Heading size={'sm'}>Links:</Heading>
                        <Box><a href={project.siteUrl} rel="noreferrer" target={'_blank'}>Visit Site</a></Box>
                        {
                            project.frontendGithub ? 
                                <Box><a href={project.frontendGithub} rel="noreferrer" target={'_blank'}>View frontend sourcecode</a></Box>
                            : ""
                        }
                        {
                            project.backendGithub ? 
                                <Box><a href={project.backendGithub} rel="noreferrer" target={'_blank'}>View backend sourcecode</a></Box>
                            : ""
                        }
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

const work: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <Nav></Nav>
            <Flex direction={'column'} flex={1}>
                <Container maxW={'container.xl'}>
                    <Heading mb={3}>work</Heading>
                    { projects.map((project, i) => <Project project={project} key={i}></Project> )}
                </Container>
            </Flex>
            <Footer></Footer>
        </Flex>
    );
};
  
export default work;
  