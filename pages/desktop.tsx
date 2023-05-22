import React, {useEffect, useState} from 'react';
import Applications from "@/app/components/applications";
import CommonLayout from "@/app/layouts/CommonLayout";

const constant = {
  keyCode: {
      esc: 27
  }
};

const DesktopPage: React.FC = () => {

    const applications = (() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [visible, setVisible] = useState(false);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isMovedSearchText, setIsMovedSearchText] = useState(false);

        return {
            visible,
            isMovedSearchText,
            setVisible,
            setIsMovedSearchText,
            onClickBody(){
                setVisible(false);
                setIsMovedSearchText(false);
            },
            onClickSearchText(){
                setIsMovedSearchText(!isMovedSearchText);
            }
        };

    })();

    useEffect(() => {

        const onWindowKeydown = ( event ) => {
            if(event.keyCode === constant.keyCode.esc){

                if(applications.isMovedSearchText){
                    applications.setIsMovedSearchText(false);
                }else{
                    applications.setVisible(false);
                }
            }
        };

        window.addEventListener("keydown", onWindowKeydown);
        return () => {
            window.removeEventListener("keydown", onWindowKeydown);
        };

    });

    const methods = {

        onClickShowApplicationButton(){
            applications.setVisible(true);
        }
    };

    return (
        <CommonLayout>
            <div onClick={methods.onClickShowApplicationButton}>어플리케이션 보기</div>
            <Applications visible={applications.visible} isMovedSearchText={applications.isMovedSearchText} onClickBody={applications.onClickBody} onClickSearchText={applications.onClickSearchText}></Applications>
        </CommonLayout>
    );
};

export default DesktopPage;