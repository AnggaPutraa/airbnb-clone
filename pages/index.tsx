import axios from 'axios'
import Head from 'next/head'
import Banner from '../components/Banner'
import CustomHead from '../components/CustomHead'
import ExploreNearbySection from '../components/ExploreNearbySection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InspiredSection from '../components/InspiredSection'
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
      <CustomHead title='Airbnb' />
      <Header placeholder={''} />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearbySection content={exploreNearbyConent} />
        <LiveAnyWhereSection content={liveAnywhereConent} />
        <InspiredSection />
      </main>
      <Footer />
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
    axios.get(request.getNearbyLocation).then(res => res.data),
    axios.get(request.getLiveAnywhereConent).then(res => res.data)
  ])
  return {
    props: {
      exploreNearbyConent: exploreNearbyConent,
      liveAnywhereConent: liveAnywhereConent
    }
  }
}