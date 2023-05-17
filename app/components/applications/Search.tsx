import React, {useState} from "react";
import Icon from "@/app/constants/class/Icon";

const Constant = {

    className: {

    }

};

const Search: React.FC = () => {

    const [isClickedStartButton, setIsClickedStartButton] = useState(false)


    const methods = {

        startButtonWidthClassName(){

            if( isClickedStartButton ){
                return 'w-auto';
            }

            return 'w-full';

        },

        onClickStartButton(){

            setIsClickedStartButton(true);

        }

    };

    return (
        <div className={"relative inline-block rounded h-[24px]"} style={{"box-shadow": "#ffffff 0px 0px 0px 1px"}}>
            <input className={"border-0 bg-transparent rounded text-white"}>

            </input>
            <div className={`absolute left-0 top-0 text-gray-400 cursor-pointer text-center transition ${methods.startButtonWidthClassName()}`} onClick={methods.onClickStartButton}>
                <i className="fa-solid fa-magnifying-glass"></i> 검색
            </div>
        </div>
    );
};

export default Search;