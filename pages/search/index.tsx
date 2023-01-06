import CustomHead from "../../components/CustomHead";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Search = () => {
    return (
        <div>
            <CustomHead title='Search' />
            <Header />
            <main className="flex">
                <section className="flex-grow pt-14 px-16 mt-8">
                    <p className="text-sm">300+stays for 5 number of guests</p>
                    <h1 className="text-4xl font-semibold mt-2 mb-6">Stays in London</h1>
                    <div className="hidden md:inline-flex space-x-4 mb-6 text-gray-800 whitespace-nowrap">
                        <p className="filter-button">Cancleation Flexibiloty</p>
                        <p className="filter-button">Type of Place</p>
                        <p className="filter-button">Price</p>
                        <p className="filter-button">Rooms and Beds</p>
                        <p className="filter-button">More filter</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;