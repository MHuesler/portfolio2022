import { Box, Container, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW={'container.xl'}>
      <Box mb={20} mt={10}>
        <Heading size={'2xl'}>Hi, I'm Maxim. ✌️</Heading>
        <Text>A 18 year old Software Developer from Switzerland.</Text>
      </Box>
      <SimpleGrid minChildWidth='450px' spacing='46px' mb={5}>
        <HomeBox title={'work'} href={'/work'}></HomeBox>
        <HomeBox title={'skills'} href={'/skills'}></HomeBox>
        <HomeBox title={'about'} href={'/about'}></HomeBox>
        <HomeBox title={'contact'} href={'/contact'}></HomeBox>
      </SimpleGrid>
    </Container>
  )
}

const HomeBox = ({title, href} : {title: string, href: string}) => {
  return (
    <Link href={ href }>
      <Box borderLeft={'solid 10px black'} p={5} height='200px'>
        <Heading size='4xl'>{ title }</Heading>
      </Box>
    </Link>
  )
}

export default Home
