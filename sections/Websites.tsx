import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Websites: NextPage = () => {
  return (
    <Center py={50}>
      <HStack spacing={25}>
        <Link href={'https://github.com/MHuesler'} target={'_blank'}>
          <Center rounded={180} bgColor={"gray.300"} height={75} width={75} _hover={{ bgColor: "gray.200", transition: "all .3s ease" }}>
            <Icon as={FaGithub} w={25} h={25}></Icon>
          </Center>
        </Link>
        <Link href={'https://www.linkedin.com/in/mhuesler/'} target={'_blank'}>
          <Center rounded={180} bgColor={"gray.300"} height={75} width={75} _hover={{ bgColor: "gray.200", transition: "all .3s ease" }}>
            <Icon as={FaLinkedinIn} w={25} h={25}></Icon>
          </Center>
        </Link>
      </HStack>
    </Center>
  );
};

export default Websites;
