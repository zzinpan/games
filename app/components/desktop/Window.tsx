import React, {MouseEventHandler, useEffect, useState} from "react";
import Vector2 from "@/app/constants/class/Vector2";
import Utils from "@/app/utils";

const constant = {

    className: {

        header: 'mac-window-header'

    }

};

const Window: React.FC<{
    focus: boolean
    visible: boolean
    left: number
    top: number
    children: React.ReactNode
    parent: React.ReactNode
    onClickCloseButton: MouseEventHandler
    onMouseDown: MouseEventHandler
}> = (props) => {

    const [ position, setPosition ] = useState( new Vector2( props.left, props.top ) );
    const [ mousemoveOffset, setMousemoveOffset ] = useState<Vector2 | null>( null );


    const refs = {

        window: React.createRef(),

    };


    const methods = {

        getClassNameByVisible(){

            if( props.visible ){
                return 'opacity-100';
            }

            return 'opacity-0';

        },

        getClassNameByFocus(){

            if( props.focus ){
                return 'z-40';
            }
            
            return 'z-0';

        },

        getButtonClassNameByFocus(){

            if( props.focus ){
                return '';
            }

            return 'bg-gray-400';

        },

        onMouseDown( event ){

            if( event.target.classList.contains( constant.className.header ) === false && Utils.isNull( event.target.closest(`.${constant.className.header}`) ) ){
                return;
            }

            if( event.target.closest('.mac-window') !== refs.window.current ){
                return;
            }

            if( event.button !== 0 ){
                return;
            }

            setMousemoveOffset( new Vector2( position.getX() - event.pageX, position.getY() - event.pageY ) );

        },

        onMouseMove( event ){

            if( mousemoveOffset === null ){
                return;
            }

            const left = event.pageX + mousemoveOffset.getX();
            let top = event.pageY + mousemoveOffset.getY();
            if( top < 0 ){
                top = 0;
            }
            setPosition( new Vector2( left, top ) );

        },

        onMouseUp(){

            if( mousemoveOffset === null ){
                return;
            }

            setMousemoveOffset( null );

        }

    };

    useEffect(() => {

        if(props.parent.current === null){
            return;
        }

        const parent = props.parent.current;

        parent.addEventListener('mousedown', methods.onMouseDown);
        parent.addEventListener('mousemove', methods.onMouseMove);
        parent.addEventListener('mouseup', methods.onMouseUp);

        return () => {

            parent.removeEventListener('mouseup', methods.onMouseUp);
            parent.removeEventListener('mousemove', methods.onMouseMove);
            parent.removeEventListener('mousedown', methods.onMouseDown);

        };

    });

    return (
        <div ref={refs.window} className={`mac-window absolute inline-block rounded-xl shadow-2xl shadow-black overflow-hidden transition-opacity duration-700 ${methods.getClassNameByFocus()} ${methods.getClassNameByVisible()}`} style={{left: `${position.getX()}px`, top: `${position.getY()}px`}} onMouseDown={props.onMouseDown}>
            <div className={'mac-window-header absolute w-full left-0 top-0 pl-[20px] pt-[10px] pb-[10px] pr-[20px] inline-block cursor-move'}>
                <div className={`rounded-full bg-red-500 inline-block w-[12px] h-[12px] shadow cursor-pointer ${methods.getButtonClassNameByFocus()}`} onClick={props.onClickCloseButton}></div>
                <div className={`rounded-full bg-yellow-500 inline-block ml-[8px] w-[12px] h-[12px] shadow cursor-pointer ${methods.getButtonClassNameByFocus()}`}></div>
                <div className={`rounded-full bg-green-500 inline-block ml-[8px] w-[12px] h-[12px] shadow cursor-pointer ${methods.getButtonClassNameByFocus()}`}></div>
            </div>
            {props.children}
        </div>
    );
};

export default Window;