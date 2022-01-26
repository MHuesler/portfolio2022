import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Landing from '../sections/Landing'

const Home: NextPage = () => {
  return (
    <>
      <Landing></Landing>
      <Footer></Footer>
    </>
  )
}

export default Home
