import Image from 'next/image'
import { NearbyLocation } from '../types/nearby-location';
const SmallCard = ({ content }: Props) => {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out'>
            <div className='relative h-16 w-16'>
                <Image
                    src={content.img}
                    layout='fill'
                    className='rounded-lg'
                    alt={content.location}
                />
            </div>
            <div>
                <h1>{content.location}</h1>
                <h1 className='text-gray-500'>{content.distance}</h1>
            </div>
        </div>
    );
}

export default SmallCard;

interface Props {
    content: NearbyLocation
}