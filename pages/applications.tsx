import React, {useState} from 'react';
import ApplicationsLayout from "@/app/layouts/ApplicationsLayout";
import IconComponent from "@/app/components/applications/Icon";
import Icon from "@/app/constants/class/Icon";
import Search from "@/app/components/applications/Search";
import PageNavigation from "@/app/components/applications/PageNavigation";
import Size from "@/app/constants/class/Size";
import Utils from "@/app/utils";
import Section from "@/app/components/applications/Section";

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

const ApplicationsPage: React.FC = () => {

    const [selectedPageIndex, setSelectedPageIndex] = useState(0);
    const [isMovedSearchText, setMovedSearchText] = useState(false);

    const refs = {

        search: React.createRef()

    };

    const methods = {

        onClickPage( index ){
            setSelectedPageIndex( index );
        },

        onClickSearchText(){
            setMovedSearchText( !isMovedSearchText );
        },

        onClickBody(event){

            if(isMovedSearchText === false){
                return;
            }

            if( event.currentTarget === refs.search.current ){
                return;
            }

            setMovedSearchText(false);

        },

        onClickSearchSection(event){
           event.stopPropagation();
        }

    }

    const rowIconLength = constant.iconPageSize.getHeight() / Icon.OuterSize.getHeight();
    const columnIconLength = constant.iconPageSize.getWidth() / Icon.OuterSize.getWidth();
    const pageIconLength = rowIconLength * columnIconLength;
    const pageLength = Math.ceil( constant.icons.length / pageIconLength );

    return (
        <ApplicationsLayout onClick={methods.onClickBody}>
            <Section>
                <div ref={refs.search} onClick={methods.onClickSearchSection}>
                    <Search isMovedSearchText={isMovedSearchText} onClickSearchText={methods.onClickSearchText}></Search>
                </div>
            </Section>
            <div className={constant.className.body} style={{height: "calc(100% - 100px)"}}>

                {Utils.getLoopArray(( pageIndex ) => {


                    const firstIndex = pageIndex * pageIconLength;
                    const maxIndex = constant.icons.length;
                    const loopMaxIndex = Math.min( pageIconLength, maxIndex - firstIndex );

                    const offsetLeft = `${( pageIndex - selectedPageIndex ) * 100}%`;
                    return <div key={pageIndex} className={'absolute text-center w-[1200px] h-[600px] -ml-[600px] top-1/2 -mt-[300px] ease-in-out duration-700'} style={{left: `calc( 50% + ${offsetLeft} )`}}>

                        {Utils.getLoopArray(( index ) => {

                            const iconIndex = firstIndex + index;
                            const icon = constant.icons[ iconIndex ];
                            return <div key={icon.getId()} className={'inline-block m-[50px]'}>
                                <IconComponent icon={ icon }></IconComponent>
                            </div>;

                        }, loopMaxIndex)}

                    </div>;

                }, pageLength)}
            </div>
            <Section>
                <PageNavigation selectedIndex={selectedPageIndex} length={pageLength} onClick={methods.onClickPage}></PageNavigation>
            </Section>
        </ApplicationsLayout>
    );
};

export default ApplicationsPage;