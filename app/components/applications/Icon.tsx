import React from "react";
import Image from 'next/image';
import Icon from "@/app/constants/class/Icon";

const IconComponent: React.FC<{

    icon: Icon

}> = ( { icon } ) => {

    const iconName = icon.getName();

    return (
        <div className={'relative inline-block text-center cursor-pointer'}>
            <Image className={'rounded-[20px]'} alt={iconName} src={icon.getImageSource()} width={100} height={100} draggable={false}></Image>
            <div className={'absolute top-full mt-2 text-white whitespace-pre left-1/2 -translate-x-1/2 text-sm'}>{iconName}</div>
        </div>
    );
};

export default IconComponent;