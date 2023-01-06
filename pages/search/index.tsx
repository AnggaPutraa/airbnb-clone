import { useRouter } from "next/router";
import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { format } from 'date-fns'
import SearchResultHeader from "../../components/SearchResultHeader";

const Search = () => {
    const router = useRouter();

    const { location, startDate, endDate, guestsCount } = router.query

    const formatedStartDate = format(new Date(String(startDate)), 'dd MMMM yyyy')
    const formatedEndDate = format(new Date(String(endDate)), 'dd MMMM yyyy')
    const staysRange = `${formatedStartDate} - ${formatedEndDate}`

    return (
        <div>
            <CustomHead title='Search' />
            <Header placeholder={`${location} | ${staysRange} | ${guestsCount} guests`} />
            <main className="flex">
                <SearchResultHeader
                    location={String(location)}
                    staysRange={staysRange}
                    guestsCount={Number(guestsCount)}
                />
            </main>
            <Footer />
        </div>
    );
}

export default Search;