import React, {useEffect, useState} from 'react';
import Applications from "@/app/components/applications";
import CommonLayout from "@/app/layouts/CommonLayout";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import Image from "next/image";

const constant = {
  keyCode: {
      esc: 27
  }
};

dayjs.locale('ko');

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

    const methods = {

        onClickShowApplicationButton(){
            applications.setVisible(true);
        }
    };

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

    return (
        <CommonLayout>
            <div className={'absolute min-w-[1200px] min-h-[800px] w-full h-full left-0 top-0 bg-[#424242]'}>
                <section className={'flex justify-between w-full text-white h-[29px] text-[14px] pt-[4px] pb-[4px]'}>
                    <div className={'inline-block ml-[20px]'}>
                        <Image src={'/favicon.ico'} alt={''} width={21} height={21} />
                    </div>
                    <div className={'inline-block mr-[20px]'}>
                        {dayjs().format('M월 D일 (ddd) A HH:mm')}
                    </div>
                </section>
                <section className={'relative'} style={{height: 'calc(100% - 60px - 29px)'}}>
                    바디
                </section>
                <section className={'relative bg-[rgba(255,255,255,0.25)] p-[10px] h-[60px] left-[40px] rounded-xl'} style={{width: 'calc(100% - 80px)'}}>
                    <div className={'inline-block bg-white rounded-lg cursor-pointer'} onClick={methods.onClickShowApplicationButton}>
                        <Image src={'/image/desktop/applications.png'} alt={''} width={40} height={40} />
                    </div>
                </section>
                <Applications visible={applications.visible} isMovedSearchText={applications.isMovedSearchText} onClickBody={applications.onClickBody} onClickSearchText={applications.onClickSearchText}></Applications>
            </div>
        </CommonLayout>
    );
};

export default DesktopPage;