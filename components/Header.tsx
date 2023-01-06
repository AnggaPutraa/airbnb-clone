import Image from 'next/image'
import { DynamicHeroIcon } from '../public/icons/DynamicHeroIcon';

const Header = () => {
    return (
        <header className='sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
            <div className='relative h-8 flex items-center cursor-pointer my-auto'>
                <Image
                    className='hidden md:inline-flex'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    alt='airbnb-icon'
                />
                <Image
                    className='inline-flex md:hidden'
                    src='https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    alt='airbnb-icon'
                />
            </div>
            <div className='flex items-center border rounded-full md:shadow-sm py-1'>
                <input
                    type="text"
                    className='pl-5 bg-transparent outline-none w-full placeholder-gray-400' placeholder='Start youre search'
                />
                <DynamicHeroIcon
                    icon='SearchIcon'
                    className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'
                />
            </div>
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                <p className='hidden md:inline-flex'>Become a host</p>
                <DynamicHeroIcon
                    icon='GlobeAltIcon'
                    className='h-6 cursor-pointer'
                />
                <div className='flex items-center space-x-2 p-2 border-2 rounded-full'>
                    <DynamicHeroIcon
                        icon='MenuIcon'
                        className='h-6 cursor-pointer'
                    />
                    <DynamicHeroIcon
                        icon='UserCircleIcon'
                        className='h-6 cursor-pointer'
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;