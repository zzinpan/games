import React from "react";
import Utils from "@/app/utils";

const PageNavigation: React.FC<{

    selectedIndex: number;
    length: number;
    onClick: ( clickedIndex: number ) => void | undefined;

}> = ( props ) => {

    const methods = {

        getOpacityClassName( index: number ): string {

            if( props.selectedIndex === index ){
                return "opacity-100";
            }

            return "opacity-50";
        },

        onClick(index, event){
            event.stopPropagation();
            if( props.onClick === undefined ){
                return;
            }

            props.onClick( index );
        }

    };

    return (
        <div className={"relative inline-block h-[24px]"}>
            {Utils.getLoopArray((i) => {
                return <div key={i} className={`${'inline-block rounded-full w-[10px] h-[10px] cursor-pointer bg-white'} ${methods.getOpacityClassName(i)}`} style={{margin: "0px 4px"}} onClick={methods.onClick.bind(null, i)}></div>;
            }, props.length)}
        </div>
    );
};

export default PageNavigation;