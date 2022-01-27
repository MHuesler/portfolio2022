import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from '../sections/About'
import Landing from '../sections/Landing'
import Websites from '../sections/Websites'

const Home: NextPage = () => {
  return (
    <>
      <Landing></Landing>
      <About></About>
      <Websites></Websites>
      <Footer></Footer>
    </>
  )
}

export default Home
