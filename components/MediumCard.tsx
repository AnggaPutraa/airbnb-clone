import Image from "next/image";
import { LiveAnyWhere } from "../types/live-anywhere-conent";

const MediumCard = ({content}: Props) => {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    src={content.img}
                    layout='fill'
                    className='rounded-lg'
                    alt={content.title}
                />
            </div>
            <h1 className='text-2xl mt-3'>{content.title}</h1>
        </div>
    );
}
 
export default MediumCard;

interface Props {
    content: LiveAnyWhere
}