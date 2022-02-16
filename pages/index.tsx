import { Box, Container, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Head from 'next/head'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'

const Home: NextPage = () => {
  return (
    <Flex minH={'100vh'} direction={'column'}>
      <Head>
        <title>Maxim Hüsler | Portfolio Home</title>
        <meta name='description' content='This is the portfolio site of Maxim Hüsler a Software Developer from Switzerland.'/>
      </Head>
      <Flex direction={'column'} flex={1}>
        <main>
          <Container maxW={'container.xl'}>
            <Flex py={3} justifyContent={'space-between'}>
              <Box mb={20} mt={10}>
                <Heading as={'h1'} size={'2xl'}>Hi, I&apos;m Maxim. ✌️</Heading>
                <Text>An 18 year old Software Developer from Switzerland.</Text>
              </Box>
              <ColorModeSwitcher></ColorModeSwitcher>
            </Flex>
            <SimpleGrid minChildWidth='450px' spacing='46px' mb={5}>
              <HomeBox title={'work'} href={'/work'}></HomeBox>
              <HomeBox title={'about'} href={'/about'}></HomeBox>
              <HomeBox title={'contact'} href={'/contact'}></HomeBox>
            </SimpleGrid>
          </Container>
        </main>
      </Flex>
      <Footer></Footer>
    </Flex>
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
