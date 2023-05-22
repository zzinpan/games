import React, {MouseEventHandler, useEffect, useState} from "react";

const Search: React.FC<{

    isMovedSearchText: boolean
    onClickSearchText: MouseEventHandler | undefined

}> = (props) => {

    const [searchText, setSearchText] = useState('검색');

    useEffect(() => {

        const input = refs.input.current;
        if( props.isMovedSearchText ){

            // 500ms의 이동 transition이 발생
            setTimeout(() => {
                input.focus();
            }, 500);

            return;
        }

        input.value = '';
        input.blur();
        setSearchText('검색');

    });

    const refs = {

        input: React.createRef()

    };

    const methods = {

        getSearchTextWidth(){

            if( props.isMovedSearchText ){
                return '0px';
            }

            return 'calc(100% - 4px)';

        },

        getSearchTextPointerEvents(){

            if( props.isMovedSearchText ){
                return 'pointer-events-none';
            }

            return 'pointer-events-auto';

        },

        onClickSearchText(event){

            if(props.onClickSearchText === undefined){
                return;
            }

            props.onClickSearchText(event);

        },

        onSearchInput( event ){
            if( event.currentTarget.value.length === 0 ){
                setSearchText('검색');
                return;
            }

            setSearchText('');
        }

    };

    return (
        <div className={"relative inline-block rounded h-[24px] text-[14px] p-[2px]"} style={{"boxShadow": "#ffffff 0px 0px 0px 1px"}}>
            <input ref={refs.input} className={"border-0 bg-transparent rounded text-white outline-0 pl-[23px]"} onInput={methods.onSearchInput}></input>
            <div className={`absolute top-0 left-[4px] text-gray-400 text-center whitespace-nowrap ease-in-out duration-500 p-[2px] cursor-pointer`} style={{width: methods.getSearchTextWidth()}} onClick={methods.onClickSearchText}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className={methods.getSearchTextPointerEvents()}> {searchText}</span>
            </div>
        </div>
    );
};

export default Search;