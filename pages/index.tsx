import axios from 'axios'
import Head from 'next/head'
import Banner from '../components/Banner'
import ExploreNearbySection from '../components/ExploreNearbySection'
import Header from '../components/Header'
import LiveAnyWhereSection from '../components/LiveAnywhereSection'
import { LiveAnyWhere } from '../types/live-anywhere-conent'
import { NearbyLocation } from '../types/nearby-location'
import request from '../utils/request'

const Home = ({
  exploreNearbyConent,
  liveAnywhereConent
}: Props) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearbySection content={exploreNearbyConent} />
        <LiveAnyWhereSection content={liveAnywhereConent} />
      </main>
    </div>
  )
}

export default Home

interface Props {
  exploreNearbyConent: NearbyLocation[]
  liveAnywhereConent: LiveAnyWhere[]
}

export const getServerSideProps = async () => {
  const [
    exploreNearbyConent,
    liveAnywhereConent
  ] = await Promise.all([
    axios.get(request.getNearbyLocatin).then(res => res.data),
    axios.get(request.getLiveAnywhereConent).then(res => res.data)
  ])
  return {
    props: {
      exploreNearbyConent: exploreNearbyConent,
      liveAnywhereConent: liveAnywhereConent
    }
  }
}