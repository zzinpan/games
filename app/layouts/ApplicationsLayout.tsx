import React, {MouseEventHandler} from "react";
import CommonLayout from "@/app/layouts/CommonLayout";

const ApplicationsLayout: React.FC<{

    children: React.ReactNode,
    onClick: MouseEventHandler | undefined

}> = ({ children, onClick }) => {

    return (
        <CommonLayout>
            <div className="layout application bg-[#424242] bg-gradient-radial absolute top-0 left-0 min-w-[1200px] min-h-[800px] w-full h-full" onClick={onClick}>
                {children}
            </div>
        </CommonLayout>
    )

};

export default ApplicationsLayout;
