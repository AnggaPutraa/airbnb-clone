
const SearchResultHeader = ({location, staysRange, guestsCount}: Props) => {
    return (
        <section className="flex-grow mt-8">
            <p className="text-sm">300+stays - {staysRange} - for {guestsCount} guests</p>
            <h1 className="text-4xl font-semibold mt-2 mb-6">Stays in {location}</h1>
            <div className="hidden md:inline-flex space-x-4 mb-6 text-gray-800 whitespace-nowrap">
                <p className="filter-button">Cancleation Flexibiloty</p>
                <p className="filter-button">Type of Place</p>
                <p className="filter-button">Price</p>
                <p className="filter-button">Rooms and Beds</p>
                <p className="filter-button">More filter</p>
            </div>
        </section>
    );
}

export default SearchResultHeader;

interface Props {
    location: string
    staysRange: string
    guestsCount: number
}