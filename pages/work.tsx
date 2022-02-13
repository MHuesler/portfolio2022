import {
    Box,
    Container, Flex, Heading, HStack, Image, Text
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

interface Project {
    date: string
    title: string
    description: string
    employer: string
    technologies: string
    image: string
    siteUrl: string
    blog?: string
    frontendGithub?: string
    backendGithub?: string
}

const projects: Project[] = [
    {
        date: '2022 - now',
        title: 'Astrovote',
        employer: 'sideproject',
        description: `Astrovote is a forum, where equiry traders can share their trade ideas. 
        Each post can be rated by other users. 
        Focus lies on technical analysis which often gets called trading astrology, thus the name astrovote.`,
        technologies: 'Angular13, RxJS, Taiga UI, .NET 6, Entity Framework, PostgreSQL, NGINX, Ngx-Translate',
        siteUrl: 'https://astrovote.com',
        frontendGithub: 'https://github.com/MHuesler/astrovote-frontend',
        backendGithub: 'https://github.com/MHuesler/astrovote-backend',
        image: 'astrovote-home.png'
    },
    {
        date: '2021 - 2021',
        title: '2reserve Admin UI',
        employer: 'employer: 2sic',
        description: `2reserve is a booking system used by organizations to manage availability and rent different "objects" such as rooms. 
        I worked on the creation of modules in the Admin UI. My tasks included the implementation of components and API calls necessary for CRUD operations.`,
        technologies: 'Angular12, RxJS, NgRx Store, Angular Material, Ngx-Translate, Kendo UI',
        siteUrl: 'https://www.2reserve.ch',
        image: '2reserve-admin-ui.png',
        blog: 'https://www.2sic.com/blog/post/es-ist-bescherungszeit-2reserve-update-im-admin-bereich'
    },
    {
        date: '2021 - 2022',
        title: 'School-Sys Edu. Portal',
        employer: 'employer: 2givelife foundation',
        description: `School-Sys is an education system designed and used by teachers in developing countries. 
        My Tasks included the creation of the education portal. 
        The portal consists of modules such as a dashboard, subjects, units and an API for PDF generation.`,
        technologies: 'ASP.NET Razor, DNN, 2sxc',
        siteUrl: 'https://school-sys.org/en',
        image: 'school-sys-home.png',
    },
    {
        date: '2021 - now',
        title: 'TherapyApp',
        employer: 'sideproject',
        description: `TherapyApp is an online software for therapists which allows the creation & managemenet of appointments, patients and more.`,
        technologies: 'Angular13, RxJS, Taiga UI, .NET 6, Entity Framework, PostgreSQL, NGINX, Ngx-Translate',
        siteUrl: 'https://my.therapyapp.ch',
        image: 'therapyapp.png',
    },
    {
        date: '2021 - now',
        title: 'TherapyApp Homepage',
        employer: 'sideproject',
        description: `TherapyApp Homepage is the homepage for TherapyApp. It provides a showcase of the apps features.`,
        technologies: 'React, NextJS, Chakra UI',
        siteUrl: 'https://therapyapp.ch',
        image: 'therapyapp-home.png',
    },
]

const Project = ({project}: {project: Project}) => {
    return (
        <Box py="5">
            <Flex direction={{ base: 'column', md: 'row'}} gap={5}>
                <Box>
                    <a href={project.siteUrl} rel="noreferrer" target={'_blank'}>
                        <Image borderRadius={'md'} shadow={'md'} src={project.image} alt="Screenshot from astrovote homepage"></Image>
                    </a>
                </Box>
                <Box minW={'50%'} w={{base: '100%', md: '50%'}}>
                    <Text fontSize={'sm'}>{project.date}</Text>
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
                        {
                            project.blog ? 
                                <Box><a href={project.blog} rel="noreferrer" target={'_blank'}>View blog post</a></Box>
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
            <Head>
                <title>Maxim Hüsler | Work</title>
                <meta name='description' content='View the latest projects from Maxim Hüsler.'></meta>
            </Head>
            <Nav></Nav>
            <Flex direction={'column'} flex={1}>
                <main>
                    <Container maxW={'container.xl'}>
                        <Heading as={'h1'} mb={3}>work</Heading>
                        { projects.map((project, i) => <Project project={project} key={i}></Project> )}
                    </Container>
                </main>
            </Flex>
            <Footer></Footer>
        </Flex>
    );
};
  
export default work;
  