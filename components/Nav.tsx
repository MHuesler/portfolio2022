import {
    Flex,
    HStack,
    Text,
    Link,
    Container,
} from "@chakra-ui/react";
import { NextPage } from "next";

const NavLink = ({ text, route}: { text: string, route: string}) => {
  return (
    <Link href={route} _hover={{ textDecoration: "none", color: "gray.500" }}>
      <Text fontSize="lg" fontWeight={700}>{ text }</Text>
    </Link>
  )
}

const Nav: NextPage = () => {
  return (
    <Container maxW='container.xl'>
      <Flex py="3" justify={"space-between"} alignItems="center">
        <NavLink text="Home" route="/"></NavLink>
        <HStack spacing={5}>
          <NavLink text="Work" route="work"></NavLink>
          <NavLink text="About" route="about"></NavLink>
        </HStack>
      </Flex>
    </Container>
  );
};
  
export default Nav;
  