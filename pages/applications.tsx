import React, {useState} from 'react';
import ApplicationsLayout from "@/app/layouts/ApplicationsLayout";
import IconComponent from "@/app/components/applications/Icon";
import Icon from "@/app/constants/class/Icon";
import Search from "@/app/components/applications/Search";
import PageNavigation from "@/app/components/applications/PageNavigation";

const constant = {

    icons: [
        new Icon( 'rps', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps1', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps2', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps3', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps4', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps5', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps6', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps7', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps8', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps9', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps11', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps12', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps13', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps14', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps15', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps16', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps17', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps18', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
        new Icon( 'rps19', 'Rock Paper Scissors', '/image/applications/icon/rps.png' ),
    ]

};

const ApplicationsPage: React.FC = () => {

    const [page, setPage] = useState(0);
    const methods = {

        onClickPage( index ){

            setPage( index );

        }

    }

    return (
        <ApplicationsLayout>
            <div className={"relative p-[13px] bg-green-500 text-center"}>
                <Search></Search>
            </div>
            <div className={"relative bg-blue-400 top-0"} style={{height: "calc(100% - 100px)"}}>
                <div className={"absolute text-center w-[1200px] h-[600px] left-1/2 -ml-[600px] top-1/2 -mt-[300px] bg-red-600"}>
                    {constant.icons.map(( icon ) => {
                        return <div key={icon.getId()} className={'inline-block m-[50px]'}>
                            <IconComponent icon={ icon }></IconComponent>
                        </div>;
                    })}
                </div>
            </div>
            <div className={"relative p-[13px] bg-green-500 text-center"}>
                <PageNavigation selectedIndex={page} length={4} onClick={methods.onClickPage}></PageNavigation>
            </div>
        </ApplicationsLayout>
    );
};

export default ApplicationsPage;