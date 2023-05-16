import React from "react";
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

const Icon: React.FC<Props> = ( { icon } ) => {

  return (
      <div className={Constant.className.wrap}>
          <img className={Constant.className.image} src={icon.getImageSource()} width={"100px"} height={"100px"}></img>
          <div className={Constant.className.name}>{icon.getName()}</div>
      </div>
  );
};

export default Icon;