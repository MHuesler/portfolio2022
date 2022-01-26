import {
    Flex,
    HStack,
    Text,
    Link,
    Container,
} from "@chakra-ui/react";
import { NextPage } from "next";
  
const Nav: NextPage = () => {
    return (
    <Container maxW='container.xl'>
      <Flex py="3" justify={"space-between"} alignItems="center">
        <Link href={"/"} _hover={{ textDecoration: "none" }}>
            <Text fontSize="lg" fontWeight={700}>Maxim Hüsler</Text>
        </Link>
        <HStack spacing={5}>
          <Link href={"#work"} _hover={{ textDecoration: "none", color: "gray.500" }}>
            <Text fontSize="md" fontWeight={700}>
              Work
            </Text>
          </Link>
          <Link href={"#about"} _hover={{ textDecoration: "none", color: "gray.500" }}>
            <Text fontSize="md" fontWeight={700}>
              About
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
    );
  };
  
  export default Nav;
  