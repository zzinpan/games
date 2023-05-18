import React, {useState} from "react";
import Icon from "@/app/constants/class/Icon";

const constant = {

    className: {
        searchText: [
            'absolute',
            'left-0',
            'top-0',
            'text-gray-400',
            'cursor-pointer',
            'text-center',
            'whitespace-nowrap',
            'ease-in-out',
            'duration-500'
        ].join(" ")
    }

};

const Search: React.FC<{

    isMovedSearchText: boolean
    onClickSearchText: () => void

}> = (props) => {

    const methods = {

        getSearchTextWidthClassName(){

            if( props.isMovedSearchText ){
                return 'w-[0%]';
            }

            return 'w-[100%]';

        },

        onClickSearchText(){

            props.onClickSearchText();

        }

    };

    return (
        <div className={"relative inline-block rounded h-[24px]"} style={{"box-shadow": "#ffffff 0px 0px 0px 1px"}}>
            <input className={"border-0 bg-transparent rounded text-white"}>

            </input>
            <div className={`${constant.className.searchText} ${methods.getSearchTextWidthClassName()}`} onClick={methods.onClickSearchText}>
                <i className="fa-solid fa-magnifying-glass"></i> 검색
            </div>
        </div>
    );
};

export default Search;