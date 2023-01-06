import { NearbyLocation } from "../types/nearby-location";

const ExploreNearbySection = ({content}:Props) => {
    return (
        <section className="pt-6">
            <h1 className="text-2xl font-search pb-5">Explore Nearby</h1>
        </section>
    );
}
 
export default ExploreNearbySection;

interface Props {
    content: NearbyLocation[]
}