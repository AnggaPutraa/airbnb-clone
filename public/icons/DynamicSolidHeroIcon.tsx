import * as HeroIcons from "@heroicons/react/solid";

type IconName = keyof typeof HeroIcons;
interface IconProps {
    icon: IconName;
    className: string;
}

export const DynamicSolidHeroIcon = ({ icon, className }: IconProps) => {
    const SingleIcon = HeroIcons[icon];

    return (
        <SingleIcon className={className} />
    );
};