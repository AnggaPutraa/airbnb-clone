import Image from 'next/image'
import { DynamicHeroIcon } from '../public/icons/DynamicHeroIcon';

const Header = () => {
    return (
        <div>
            <DynamicHeroIcon
                icon='SearchIcon'
                className='h-8 bg-red-400'
            />
        </div>
    );
}

export default Header;