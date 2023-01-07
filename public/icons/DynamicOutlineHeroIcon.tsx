import * as HeroIcons from "@heroicons/react/outline";

type IconName = keyof typeof HeroIcons;
interface IconProps {
    icon: IconName;
    className: string;
}

export const DynamicOutlineHeroIcon = ({ icon, className }: IconProps) => {
    const SingleIcon = HeroIcons[icon];

    return (
        <SingleIcon className={className} />
    );
};