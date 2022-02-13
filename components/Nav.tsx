import {
    Flex,
    HStack,
    Text,
    Link,
    Container,
    Icon,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";

const NavLink = ({ text, route, icon}: { text: string, route: string, icon?: IconType }) => {
  return (
    <Link href={route}>
      <HStack>
        {
          (icon != null) ? <Icon as={icon}></Icon> : null
        }
        <Text fontSize="md" fontWeight={700}>{ text.toUpperCase() }</Text>
      </HStack>
    </Link>
  )
}

const Nav: NextPage = () => {
  return (
    <Container maxW='container.xl'>
      <Flex py="3" justify={"space-between"} alignItems="center">
        <NavLink text="Home" route="/" icon={FaArrowLeft}></NavLink>
        <HStack spacing={5}>
          <NavLink text="Work" route="work"></NavLink>
          <NavLink text="About" route="about"></NavLink>
          <NavLink text="Contact" route="contact"></NavLink>
        </HStack>
      </Flex>
    </Container>
  );
};
  
export default Nav;
  