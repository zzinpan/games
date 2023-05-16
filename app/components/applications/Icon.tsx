import React from "react";
import Image from 'next/image';
import Icon from "@/app/constants/class/Icon";

const Constant = {

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

type Props = {
    icon: Icon
}

const IconComponent: React.FC<Props> = ( { icon } ) => {

    const iconName = icon.getName();

    return (
        <div className={Constant.className.wrap}>
            <Image className={Constant.className.image} alt={iconName} src={icon.getImageSource()} width={100} height={100}></Image>
            <div className={Constant.className.name}>{iconName}</div>
        </div>
    );
};

export default IconComponent;