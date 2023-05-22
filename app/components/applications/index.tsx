import React, {KeyboardEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import IconComponent from "@/app/components/applications/Icon";
import Icon from "@/app/constants/class/Icon";
import Search from "@/app/components/applications/Search";
import PageNavigation from "@/app/components/applications/PageNavigation";
import Size from "@/app/constants/class/Size";
import Utils from "@/app/utils";
import Section from "@/app/components/applications/Section";
import Vector2 from "@/app/constants/class/Vector2";

const constant = {

    icons: [
        new Icon( 'rps0', 'Rock Paper Scissors0', '/image/applications/icon/rps.png' ),
        new Icon( 'rps1', 'Rock Paper Scissors1', '/image/applications/icon/rps.png' ),
        new Icon( 'rps2', 'Rock Paper Scissors2', '/image/applications/icon/rps.png' ),
        new Icon( 'rps3', 'Rock Paper Scissors3', '/image/applications/icon/rps.png' ),
        new Icon( 'rps4', 'Rock Paper Scissors4', '/image/applications/icon/rps.png' ),
        new Icon( 'rps5', 'Rock Paper Scissors5', '/image/applications/icon/rps.png' ),
        new Icon( 'rps6', 'Rock Paper Scissors6', '/image/applications/icon/rps.png' ),
        new Icon( 'rps7', 'Rock Paper Scissors7', '/image/applications/icon/rps.png' ),
        new Icon( 'rps8', 'Rock Paper Scissors8', '/image/applications/icon/rps.png' ),
        new Icon( 'rps9', 'Rock Paper Scissors9', '/image/applications/icon/rps.png' ),
        new Icon( 'rps10', 'Rock Paper Scissors10', '/image/applications/icon/rps.png' ),
        new Icon( 'rps11', 'Rock Paper Scissors11', '/image/applications/icon/rps.png' ),
        new Icon( 'rps12', 'Rock Paper Scissors12', '/image/applications/icon/rps.png' ),
        new Icon( 'rps13', 'Rock Paper Scissors13', '/image/applications/icon/rps.png' ),
        new Icon( 'rps14', 'Rock Paper Scissors14', '/image/applications/icon/rps.png' ),
        new Icon( 'rps15', 'Rock Paper Scissors15', '/image/applications/icon/rps.png' ),
        new Icon( 'rps16', 'Rock Paper Scissors16', '/image/applications/icon/rps.png' ),
        new Icon( 'rps17', 'Rock Paper Scissors17', '/image/applications/icon/rps.png' ),
        new Icon( 'rps18', 'Rock Paper Scissors18', '/image/applications/icon/rps.png' ),
        new Icon( 'rps19', 'Rock Paper Scissors19', '/image/applications/icon/rps.png' ),
        new Icon( 'rps20', 'Rock Paper Scissors20', '/image/applications/icon/rps.png' ),
        new Icon( 'rps21', 'Rock Paper Scissors21', '/image/applications/icon/rps.png' ),
        new Icon( 'rps22', 'Rock Paper Scissors22', '/image/applications/icon/rps.png' ),
        new Icon( 'rps23', 'Rock Paper Scissors23', '/image/applications/icon/rps.png' ),
        new Icon( 'rps24', 'Rock Paper Scissors24', '/image/applications/icon/rps.png' ),
        new Icon( 'rps25', 'Rock Paper Scissors25', '/image/applications/icon/rps.png' ),
        new Icon( 'rps26', 'Rock Paper Scissors26', '/image/applications/icon/rps.png' ),
        new Icon( 'rps27', 'Rock Paper Scissors27', '/image/applications/icon/rps.png' ),
        new Icon( 'rps28', 'Rock Paper Scissors28', '/image/applications/icon/rps.png' ),
        new Icon( 'rps29', 'Rock Paper Scissors29', '/image/applications/icon/rps.png' ),
        new Icon( 'rps30', 'Rock Paper Scissors30', '/image/applications/icon/rps.png' ),
        new Icon( 'rps31', 'Rock Paper Scissors31', '/image/applications/icon/rps.png' ),
        new Icon( 'rps32', 'Rock Paper Scissors32', '/image/applications/icon/rps.png' ),
        new Icon( 'rps33', 'Rock Paper Scissors33', '/image/applications/icon/rps.png' ),
        new Icon( 'rps34', 'Rock Paper Scissors34', '/image/applications/icon/rps.png' ),
        new Icon( 'rps35', 'Rock Paper Scissors35', '/image/applications/icon/rps.png' ),
        new Icon( 'rps36', 'Rock Paper Scissors36', '/image/applications/icon/rps.png' ),
        new Icon( 'rps37', 'Rock Paper Scissors37', '/image/applications/icon/rps.png' ),
        new Icon( 'rps38', 'Rock Paper Scissors38', '/image/applications/icon/rps.png' ),
        new Icon( 'rps39', 'Rock Paper Scissors39', '/image/applications/icon/rps.png' ),
    ],

    className: {

        section: '',
        body: '',
        iconPage: ''

    },

    ...(() => {

        const iconPageWidth = 1200;
        const iconPageHeight = 600;
        
        const constant = {
            iconPageSize: new Size( iconPageWidth, iconPageHeight ),
            className: {

                body: [
                    'relative',
                    // 'bg-blue-400',
                    'top-0',
                    'overflow-x-hidden'
                ].join(' '),
            }
        };


        return constant;

    })(),

};

const Applications: React.FC<{
    visible: boolean
    isMovedSearchText: boolean
    onClickBody: MouseEventHandler | undefined
    onClickSearchText: MouseEventHandler | undefined
}> = (props) => {

    const [selectedPageIndex, setSelectedPageIndex] = useState(0);

    const refs = {

        search: React.createRef(),
        pages: [],

    };

    const data: {
        mousedown: Vector2 | null
        moveSnap: number
        rowIconLength: number
        columnIconLength: number
        pageIconLength: number
        pageLength: number
    } = {

        mousedown: null,
        moveSnap: 200,
        ...(() => {
            const rowIconLength = constant.iconPageSize.getHeight() / Icon.OuterSize.getHeight();
            const columnIconLength = constant.iconPageSize.getWidth() / Icon.OuterSize.getWidth();
            const pageIconLength = rowIconLength * columnIconLength;
            const pageLength = Math.ceil( constant.icons.length / pageIconLength );

            return {
                rowIconLength,
                columnIconLength,
                pageIconLength,
                pageLength
            };

        })()
    };



    const methods = {

        getClassNameByVisible(){
          if( props.visible ){
              return 'opacity-100 pointer-events-auto';
          }

            return 'opacity-0 pointer-events-none';
        },

        onClickPage( index ){
            setSelectedPageIndex( index );
        },

        onClickSearchText( event ){
            if( props.onClickSearchText === undefined ){
                return;
            }
            props.onClickSearchText( event );
        },

        onClickBody(event){

            if( event.currentTarget === refs.search.current ){
                return;
            }

            if(props.onClickBody === undefined){
                return;
            }

            props.onClickBody(event);
        },

        onClickSearchSection(event){
           event.stopPropagation();
        },

        onMousedownBody(event){
            if( event.button !== 0 ){
                return;
            }

            data.mousedown = new Vector2(event.pageX, event.pageY);
        },

        onMousemoveBody(event){
            if( data.mousedown === null ){
                return;
            }

            const downX = data.mousedown.getX();
            const moveX = event.pageX - downX;

            refs.pages.forEach(( pageElement, pageIndex ) => {
                pageElement.current.style.transition = 'none';

                const offsetLeft = `${( pageIndex - selectedPageIndex ) * 100}%`;
                pageElement.current.style.left = `calc( 50% + ${offsetLeft} + ${moveX}px )`;
            });

        },

        onMouseupBody(event){
            if(data.mousedown === null){
                return;
            }

            refs.pages.forEach(( pageElement ) => {
                pageElement.current.style.transition = '';
            });

            const downX = data.mousedown.getX();
            const moveX = event.pageX - downX;
            data.mousedown = null;

            if( selectedPageIndex < data.pageLength - 1 && moveX < -data.moveSnap ){
                setSelectedPageIndex( selectedPageIndex + 1 );
                return;
            }

            if( 0 < selectedPageIndex && moveX > data.moveSnap ){
                setSelectedPageIndex( selectedPageIndex - 1 );
                return;
            }

            refs.pages.forEach(( pageElement, pageIndex ) => {
                const offsetLeft = `${( pageIndex - selectedPageIndex ) * 100}%`;
                pageElement.current.style.left = `calc( 50% + ${offsetLeft} )`;
            });
        }

    }

    return (
        <div className={`bg-[rgba(0,0,0,0.5)] bg-gradient-radial absolute top-0 left-0 min-w-[1200px] min-h-[800px] w-full h-full select-none ease-in-out duration-500 ${methods.getClassNameByVisible()}`} onClick={methods.onClickBody} onMouseDown={methods.onMousedownBody} onMouseMove={methods.onMousemoveBody} onMouseUp={methods.onMouseupBody}>
            <Section>
                <div ref={refs.search} onClick={methods.onClickSearchSection}>
                    <Search isMovedSearchText={props.isMovedSearchText} onClickSearchText={methods.onClickSearchText}></Search>
                </div>
            </Section>
            <div className={constant.className.body} style={{height: "calc(100% - 100px)"}}>

                {Utils.getLoopArray(( pageIndex ) => {


                    const firstIndex = pageIndex * data.pageIconLength;
                    const maxIndex = constant.icons.length;
                    const loopMaxIndex = Math.min( data.pageIconLength, maxIndex - firstIndex );

                    const offsetLeft = `${( pageIndex - selectedPageIndex ) * 100}%`;

                    const ref = new React.createRef();
                    refs.pages.push(ref);

                    return <div key={pageIndex} ref={ref} className={'absolute text-center w-[1200px] h-[600px] -ml-[600px] top-1/2 -mt-[300px] ease-in-out duration-700'} style={{left: `calc( 50% + ${offsetLeft} )`}}>

                        {Utils.getLoopArray(( index ) => {

                            const iconIndex = firstIndex + index;
                            const icon = constant.icons[ iconIndex ];
                            return <div key={icon.getId()} className={'inline-block m-[50px]'}>
                                <IconComponent icon={ icon }></IconComponent>
                            </div>;

                        }, loopMaxIndex)}

                    </div>;

                }, data.pageLength)}
            </div>
            <Section>
                <PageNavigation selectedIndex={selectedPageIndex} length={data.pageLength} onClick={methods.onClickPage}></PageNavigation>
            </Section>
        </div>
    );
};

export default Applications;