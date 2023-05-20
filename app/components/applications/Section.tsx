import React, {useState} from "react";

const constant = {

    className: {

    }

};

const Section: React.FC<{
    children: React.ReactNode
}> = ({children}) => {

    return (
        <div className={'relative p-[13px] text-center'}>
            {children}
        </div>
    );
};

export default Section;