import {
    Box,
    Center,
    Container,
    HStack,
    Icon,
    Text,
    VStack,
    Heading
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
  
  const Redirect = ({ icon, href}: { icon: IconType, href: string }) => {
    return (
        <a href={href} target={'_blank'} rel="noreferrer">
          <Icon as={icon} h={10} w={10}></Icon>
        </a>
    )
  }   

  const Footer: NextPage = () => {
    return (
      <Box>
        <Container maxW={"container.xl"} py={4}>
          <Center>
            <HStack>
                <Redirect icon={FaLinkedin} href="https://www.linkedin.com/in/mhuesler/"></Redirect>
                <Redirect icon={FaGithub} href="https://github.com/MHuesler"></Redirect>
            </HStack>
          </Center>
          <Center>
            <Text>© 2022 Maxim Hüsler. All rights reserved</Text>
          </Center>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  