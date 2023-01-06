import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import ExploreNearbySection from '../components/ExploreNearbySection'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png" />
      </Head>
      <Header />
      <Banner />
      <main>
        <ExploreNearbySection />
        {/* Live Anywhere Section */}
        {/* Big Card Section */}
        {/* Footer */}
      </main>
    </div>
  )
}

export default Home
