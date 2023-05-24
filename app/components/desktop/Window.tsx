import React, {useState} from "react";

const constant = {

    className: {

    }

};

const Window: React.FC<{
    left: number
    top: number
    children: React.ReactNode
}> = (props) => {



    return (
        <div className={`absolute inline-block rounded-xl overflow-hidden`} style={{left: `${props.left}px`, top: `${props.top}px`}}>
            <div className={'absolute left-[20px] top-[10px] inline-block'}>
                <div className={'rounded-full bg-red-500 inline-block w-[12px] h-[12px] shadow cursor-pointer'}></div>
                <div className={'rounded-full bg-yellow-500 inline-block ml-[8px] w-[12px] h-[12px] shadow cursor-pointer'}></div>
                <div className={'rounded-full bg-green-500 inline-block ml-[8px] w-[12px] h-[12px] shadow cursor-pointer'}></div>
            </div>
            {props.children}
        </div>
    );
};

export default Window;