import React from 'react';
import NavigationDots from '../components/NavigationDots';
import SocialMedia from '../components/SocialMedia';
import { VscTriangleDown } from 'react-icons/vsc';
import './AppWrap.scss';

const downloadCV = () => {

}

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />
                {/* <div className='app__wrapper-button'>
                    <button type='button' className='p-text' onClick={downloadCV}> Download CV</button>
                </div> */}
                <div className="copyright">
                    <button type='button' className=' resumeButton p-text ' onClick={downloadCV}> Download CV < VscTriangleDown className='downloadIcon' /></button>
                    <p className="p-text">@Riyaz ul haq mansuri</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;