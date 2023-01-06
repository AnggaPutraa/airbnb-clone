import Image from "next/image";
import { LiveAnyWhere } from "../types/live-anywhere-conent";
import MediumCard from "./MediumCard";

const LiveAnyWhereSection = ({ content }: Props) => {
    return (
        <section className="pt-6">
            <h2 className='text-2xl font-semibold pb-5'>Live Anywhere</h2>
            <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
                {content?.map(
                    (item, index) => (
                        <MediumCard
                            key={index}
                            content={item}
                        />
                    )
                )}
            </div>
        </section>
    );
}

export default LiveAnyWhereSection;

interface Props {
    content: LiveAnyWhere[]
}