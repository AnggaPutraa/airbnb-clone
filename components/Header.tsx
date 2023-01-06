import Image from 'next/image'
import { DynamicHeroIcon } from '../public/icons/DynamicHeroIcon';
import { DateRangePicker } from 'react-date-range';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guestsCount, setGuestCount] = useState(1);

    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges: Range) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <header className='sticky top-0 z-20 grid grid-cols-4 bg-white shadow-md p-4 md:px-10'>
            <div 
            onClick={() => router.push('/')}
            className='relative h-8 flex items-center cursor-pointer my-auto'>
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
            <div className='flex items-center border rounded-full md:shadow-sm py-1 col-span-2'>
                <input
                    value={searchInput}
                    onChange={(e) => { setSearchInput(e.target.value) }}
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
            {searchInput && (
                <div className='flex flex-col col-span-4 mx-auto mt-4 w-full md:w-fit overflow-scroll scrollbar-hide'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5861']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b'>
                        <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guest</h2>
                        <DynamicHeroIcon
                            icon='UsersIcon'
                            className='h-6 cursor-pointer'
                        />
                        <input
                            min={1}
                            value={guestsCount}
                            onChange={(e) => setGuestCount(Number(e.target.value))}
                            type="number"
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                        />
                    </div>
                    <div className='flex items-center justify-around mt-2'>
                        <button
                            className='text-gray-500'
                            onClick={() => { setSearchInput('') }}
                        >Cancel</button>
                        <button className='text-red-400'>Search</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;

interface Range {
    selection: {
        startDate: Date
        endDate: Date
    }
}