import {
    Box,
    Container, Heading, HStack, VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Nav from "../components/Nav";

interface Project {
    title: string
    description: string
    employer: string
    technologies: string[]
    images: string[]
    github: string
}

const projects: Project[] = [
    // {
    //     title: 'Astrovote'
    // }
]

const Project = () => {
    return (
        <Box py="5">
            <HStack>
                <Box></Box>
                <Box>
                    <Heading>Astrovote</Heading>
                </Box>
            </HStack>
        </Box>
    )
}

const work: NextPage = () => {
    return (
        <Box>
            <Nav></Nav>
            <Container maxW={'container.xl'}>
                <Heading>Latest Work</Heading>
                <Project></Project>
            </Container>
        </Box>
    );
};
  
export default work;
  