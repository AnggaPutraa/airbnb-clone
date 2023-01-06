import Image from "next/image";
import { LiveAnyWhere } from "../types/live-anywhere-conent";

const LiveAnyWhereSection = ({content}: Props) => {
    return (
        <section className="pt-6">
            <h2 className='text-2xl font-semibold pb-5'>Live Anywhere</h2>
        </section>
    );
}
 
export default LiveAnyWhereSection;

interface Props {
    content: LiveAnyWhere[]
}