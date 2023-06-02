import React, {MouseEventHandler, useEffect, useState} from "react";
import Image from "next/image";

const Dock: React.FC<{
    visible: boolean
    icons: Array<{
        src: string,
        onClick: MouseEventHandler
    }>
}> = (props) => {

    let classNameByVisible = 'opacity-100 pointer-events-auto';
    if( props.visible === false ){
        classNameByVisible = 'opacity-0 pointer-events-none';
    }

    return (
        <section className={`relative backdrop-blur-md bg-[rgba(255,255,255,0.25)] p-[10px] h-[60px] left-[40px] rounded-xl z-[100] transition-opacity duration-700 ${classNameByVisible}`} style={{width: 'calc(100% - 80px)'}}>
            {props.icons.map(( icon, index ) => {

                let ml = '';
                if( 0 < index ){
                    ml = 'ml-[10px]';
                }

                return <div key={icon.src} className={'inline-block cursor-pointer'} onClick={icon.onClick}>
                    <Image className={`rounded-md ${ml}`} src={icon.src} alt={''} width={40} height={40} />
                </div>;
            })}
        </section>
    );
};

export default Dock;