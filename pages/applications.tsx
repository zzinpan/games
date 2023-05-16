import React, {useState} from 'react';
import ApplicationsLayout from "@/app/layouts/ApplicationsLayout";
import IconComponent from "@/app/components/applications/Icon";
import Icon from "@/app/constants/class/Icon";
import Search from "@/app/components/applications/Search";

const ApplicationsPage: React.FC = () => {

    const Constant = {

        icons: [
            new Icon( 'rps', 'Rock Paper Scissors', '/image/applications/icon/rps.png' )
        ]

    };

    return (
        <ApplicationsLayout>
            <div className={"flex justify-center items-center h-12"}>
                <Search></Search>
            </div>
            <div className={"relative flex justify-center items-center"} style={{height: "calc(100% - 3rem)"}}>
                {Constant.icons.map(( icon ) => {
                    return <IconComponent key={icon.getId()} icon={ icon }></IconComponent>;
                })}
            </div>
        </ApplicationsLayout>
    );
};

export default ApplicationsPage;