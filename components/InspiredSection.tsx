import Image from "next/image";

const InspiredSection = () => {
    return (
        <div>
            <section className="relative pt-10 pb-16 cursor-pointer">
                <div className='relative h-96 min-w-[300px]'>
                    <Image
                        src='https://links.papareact.com/4cj'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg'
                        alt="inspired-picture"
                    />
                </div>
                <div className='absolute top-32 left-12'>
                    <h1 className='text-4xl mb-3 w-64'>The Greatest Outdoors</h1>
                    <p>Wishlists curated by Airbnb</p>
                    <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4'>Get Inspired</button>
                </div>
            </section>
        </div>
    );
}

export default InspiredSection;