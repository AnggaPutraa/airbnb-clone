import { SearchResult } from "../types/search-result";
import InformationSearchCard from "./InformationSearchCard";

const SearchResultList = ({ searchResult }: Props) => {
    return (
        <section className="flex-grow">
            {searchResult?.map(
                (item, index) => (
                    <InformationSearchCard key={index} content={item} />
                )
            )}
        </section>
    );
}

export default SearchResultList;

interface Props {
    searchResult: SearchResult[]
}