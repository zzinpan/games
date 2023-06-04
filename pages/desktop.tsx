import React, {useEffect, useState} from 'react';
import Applications from "@/app/components/applications";
import CommonLayout from "@/app/layouts/CommonLayout";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import Image from "next/image";
import ProgramComponent from "@/app/components/desktop/Program";
import Program from "@/app/constants/class/Program";
import Vector2 from "@/app/constants/class/Vector2";
import Dock from "@/app/components/desktop/Dock";

const constant = {
  keyCode: {
      esc: 27
  }
};

dayjs.locale('ko');

const DesktopPage: React.FC = () => {

    const refs = {
        body: React.createRef(),
    };

    const dateText = (() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ dateText, setDateText ] = useState(dayjs().format('M월 D일 (ddd) A HH:mm'));

        const intervalId = setInterval(() => {
            const afterDateText = dayjs().format('M월 D일 (ddd) A HH:mm');
            if( dateText === afterDateText ){
                return;
            }

            clearInterval( intervalId );
            setDateText( afterDateText );
        }, 1000);

        return {

            get(){
                return dateText;
            }

        }

    })();

    const programs = (() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [programs, setPrograms] = useState(Array<Program>);

        return {

            getAll(){
                return programs;
            },

            blurAll(){

                programs.forEach((program: Program) => {
                    program.setFocus(false);
                });

                setPrograms( programs.slice() );
                
            },
            
            showAll(){

                programs.forEach((program: Program) => {
                    program.show();
                });

                setPrograms( programs.slice() );

            },

            hideAll(){

                programs.forEach((program: Program) => {
                    program.hide();
                });

                setPrograms( programs.slice() );

            },

            update(){

                setPrograms( programs.slice() );

            },

            focus( index ){

                programs.forEach((program: Program) => {
                    program.setFocus(false);
                });

                const program: Program = programs[ index ];
                program.setFocus(true);

                setPrograms( programs.slice() );

            },

            add(program: Program){

                programs.push( program );
                setPrograms( programs.slice() );

            },

            remove( program ){

                const index = programs.indexOf( program );
                console.log(programs.splice( index, 1 )[0].getPosition());
                setPrograms( programs.slice() );

            }

        };

    })();

    const applications = (() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [visible, setVisible] = useState(false);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isMovedSearchText, setIsMovedSearchText] = useState(false);

        return {
            getVisible(){
                return visible;
            },
            getIsMovedSearchText(){
                return isMovedSearchText;
            },
            show(){
                setVisible(true);
            },
            hide(){
                setVisible(false);
            },
            setIsMovedSearchText,
            onClickBody(){
                setVisible(false);
                setIsMovedSearchText(false);
                programs.showAll();
                dock.show();
            },
            onClickSearchText(){
                setIsMovedSearchText(!isMovedSearchText);
            }
        };

    })();

    const dock = (() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [visible, setVisible] = useState(true);

        return {
            getVisible(){
                return visible;
            },

            show(){
                setVisible(true);
            },

            hide(){
                setVisible(false);
            }
        };

    })();

    const methods = {

        onClickShowApplicationButton(){
            applications.show();
            programs.hideAll();
            dock.hide();
        },

        onClickShowProgramButton(){
            programs.blurAll();
            programs.add( new Program( true,true, new Vector2(200, 200) ) );
        },

        onClickProgramCloseButton( program ){
            if(program.isFocus() === false){
                return;
            }
            programs.remove( program );
        },

        onMouseDownProgram( program, event ){
            event.stopPropagation();
            programs.blurAll();
            program.setFocus(true);
            programs.update();
        }
    };

    useEffect(() => {

        const onWindowKeydown = ( event ) => {
            if(event.keyCode === constant.keyCode.esc){

                if(applications.getIsMovedSearchText()){
                    applications.setIsMovedSearchText(false);
                }else{
                    applications.hide();
                }
            }
        };

        const onWindowMousedown = () => {
            programs.blurAll();
        };

        window.addEventListener("keydown", onWindowKeydown);
        window.addEventListener("mousedown", onWindowMousedown);
        return () => {
            window.removeEventListener("mousedown", onWindowMousedown);
            window.removeEventListener("keydown", onWindowKeydown);
        };

    });

    return (
        <CommonLayout>
            <div className={'absolute min-w-[1200px] min-h-[800px] w-full h-full left-0 top-0 bg-[#424242] select-none overflow-hidden'}>
                <section className={'flex justify-between w-full text-white h-[29px] text-[14px] pt-[4px] pb-[4px]'}>
                    <div className={'inline-block ml-[20px]'}>
                        <Image className={'p-[3px]'} src={'/image/desktop/logo.png'} alt={''} width={21} height={21} />
                    </div>
                    <div className={'inline-block mr-[20px]'}>
                        {dateText.get()}
                    </div>
                </section>
                <section ref={refs.body} className={'relative'} style={{height: 'calc(100% - 60px - 29px)'}}>
                    {programs.getAll().map((program: Program, index )  => {

                        const position = program.getPosition();
                        console.log(program, program.isFocus());

                        return <ProgramComponent key={index} parent={refs.body} left={position.getX()} top={position.getY()} visible={program.getVisible()} focus={program.isFocus()} onMouseDown={methods.onMouseDownProgram.bind( null, program )} onClickCloseButton={methods.onClickProgramCloseButton.bind(null, program)}>
                            <div className={`text-[0px] whitespace-nowrap`}>
                                <div className={`inline-block w-[200px] h-[500px] bg-gray-300`}></div>
                                <div className={`inline-block w-[600px] h-[500px] bg-white`}></div>
                            </div>
                        </ProgramComponent>;

                    })}
                </section>
                <Dock visible={dock.getVisible()} icons={[
                    { src: '/image/applications/icon/folder.png', onClick: methods.onClickShowProgramButton },
                    { src: '/image/desktop/applications.png', onClick: methods.onClickShowApplicationButton },
                ]}></Dock>
                <Applications visible={applications.getVisible()} isMovedSearchText={applications.getIsMovedSearchText()} onClickBody={applications.onClickBody} onClickSearchText={applications.onClickSearchText} icons={[
                    { src: '/image/applications/icon/folder.png', onClick: methods.onClickShowProgramButton },
                    { src: '/image/desktop/applications.png', onClick: methods.onClickShowApplicationButton },
                ]}></Applications>
            </div>
        </CommonLayout>
    );
};

export default DesktopPage;