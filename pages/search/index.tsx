import { useRouter } from "next/router";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { format } from 'date-fns'
import NearbyLocation from '../../types/nearby-location'
import axios from "axios";
import request from "../../utils/request";
import { SearchResult } from "../../types/search-result";
import SearchResultHeader from "../../components/SearchResultHeader";
import SearchResultList from "../../components/SearchResultList";

const Search = ({ searchResult }: Props) => {
    const router = useRouter();

    const { location, startDate, endDate, guestsCount } = router.query

    const formatedStartDate = format(new Date(String(startDate)), 'dd MMMM yyyy')
    const formatedEndDate = format(new Date(String(endDate)), 'dd MMMM yyyy')
    const staysRange = `${formatedStartDate} - ${formatedEndDate}`

    return (
        <div>
            <CustomHead title='Search' />
            <Header placeholder={`${location} | ${staysRange} | ${guestsCount} guests`} />
            <main className="flex px-12 md:px-16 mt-4 md:mt-8 mb-8">
                <div className="flex flex-grow flex-col">
                    <SearchResultHeader
                        location={String(location)}
                        staysRange={staysRange}
                        guestsCount={Number(guestsCount)}
                    />
                    <SearchResultList searchResult={searchResult} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Search;

interface Props {
    searchResult: SearchResult[]
}

export const getServerSideProps = async () => {
    const response = await axios.get(request.getSearchLocation).then(res => res.data)
    return {
        props: {
            searchResult: response
        }
    }
}