import type { NextPage } from 'next'
import Head from '../components/Head'
import TextContainer from '../components/TextContainer'


const Home: NextPage = () => {
  return (
    <div>
        <Head />
      <main>
        <TextContainer />
      </main>
    </div>
  )
}

export default Home
