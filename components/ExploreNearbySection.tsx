import { NearbyLocation } from "../types/nearby-location";
import SmallCard from "./SmallCard";

const ExploreNearbySection = ({ content }: Props) => {
    return (
        <section className="pt-6">
            <h1 className="text-2xl font-semibold pb-5">Explore Nearby</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {content?.map(
                    (item, index) => (
                        <SmallCard
                            key={index}
                            content={item}
                        />
                    )
                )}
            </div>
        </section>
    );
}

export default ExploreNearbySection;

interface Props {
    content: NearbyLocation[]
}