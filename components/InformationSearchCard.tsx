import Image from "next/image";
import { DynamicOutlineHeroIcon } from "../public/icons/DynamicOutlineHeroIcon";
import { DynamicSolidHeroIcon } from "../public/icons/DynamicSolidHeroIcon";
import { SearchResult } from "../types/search-result";

const InformationSearchCard = ({ content }: Props) => {
    return (
        <div className="md:flex py-4 px-2 border-b cursor-pointer hover:shadow-lg transition duration-200 ease-out first:border-t rounded-lg">
            <div className="relative h-[200px] w-full md:h-52 md:w-80 flex-shrink-0 sm:mb-2">
                <Image
                    src={content.img}
                    layout='fill'
                    objectFit="cover"
                    alt={content.title}
                    className={'rounded-lg'}
                />
            </div>
            <div className="flex flex-grow flex-col md:pl-5">
                <div className="flex justify-between">
                    <p>{content.location}</p>
                    <DynamicOutlineHeroIcon
                        icon="HeartIcon"
                        className="h-6 cursor-pointer"
                    />
                </div>
                <h1 className="text-xl">{content.title}</h1>
                <div className="border-b w-10 pt-2" />
                <p className="flex-grow pt-2 text-gray-500 text-sm">{content.description}</p>
                <div className="flex justify-between items-end">
                    <p className="flex items-center">
                        <DynamicSolidHeroIcon
                            icon="StarIcon"
                            className="h-6 text-red-400"
                        />
                        {content.star}
                    </p>
                    <div>
                        <p className="text-lg md:text-xl font-semibold pb-2">{content.price}</p>
                        <p className="text-right text-sm font-extralight">{content.total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationSearchCard;

interface Props {
    content: SearchResult
}