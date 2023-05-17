import React from "react";
import Image from 'next/image';
import Icon from "@/app/constants/class/Icon";

const constant = {

    className: {

        wrap: [
            "relative",
            "inline-block",
            "text-center",
            "cursor-pointer"
        ].join(" "),

        image: [
            "rounded-[20px]"
        ].join(" "),

        name: [
            "absolute",
            "top-full",
            "mt-2",
            "text-white",
            "whitespace-pre",
            "left-1/2",
            "-translate-x-1/2",
            "text-sm",
        ].join(" ")

    }

};

const IconComponent: React.FC<{

    icon: Icon

}> = ( { icon } ) => {

    const iconName = icon.getName();

    return (
        <div className={constant.className.wrap}>
            <Image className={constant.className.image} alt={iconName} src={icon.getImageSource()} width={100} height={100}></Image>
            <div className={constant.className.name}>{iconName}</div>
        </div>
    );
};

export default IconComponent;