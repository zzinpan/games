import React from "react";
import Utils from "@/app/utils";

const constant = {

    className: [

        "inline-block",
        "rounded-full",
        "w-[10px]",
        "h-[10px]",
        "cursor-pointer",
        "bg-white"

    ].join(" ")

};

const PageNavigation: React.FC<{

    selectedIndex: number;
    length: number;
    onClick: ( clickedIndex: number ) => void;

}> = ( props ) => {

    const methods = {

        getOpacityClassName( index: number ): string {

            if( props.selectedIndex === index ){
                return "opacity-100";
            }

            return "opacity-50";
        }

    };

    return (
        <div className={"relative inline-block h-[24px]"}>
            {Utils.getLoopArray((i) => {
                return <div key={i} className={`${constant.className} ${methods.getOpacityClassName(i)}`} style={{margin: "0px 4px"}} onClick={props.onClick.bind(null, i)}></div>;
            }, props.length)}
        </div>
    );
};

export default PageNavigation;