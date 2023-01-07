import Image from "next/image";
import { SearchResult } from "../types/search-result";

const InformationSearchCard = ({ content }: Props) => {
    return (
        <div>
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={content.img}
                    layout='fill'
                    objectFit="cover"
                    alt={content.title}
                />
            </div>
            <div>
                <div>
                    <p>{content.location}</p>
                </div>
            </div>
        </div>
    );
}

export default InformationSearchCard;

interface Props {
    content: SearchResult
}