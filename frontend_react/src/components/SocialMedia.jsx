import React from 'react';
import { BsInstagram } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
//  lurl as https://www.linkedin.com/in/riyaz-ul-haq-mansuri-457a10172/

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/riyaz-ul-haq-mansuri-457a10172/' target='_blank' rel="noreferrer noopener"><AiFillLinkedin /></a>
        </div>
        <div>
            <a href='https://github.com/Riyazmansuri' target='_blank' rel="noreferrer noopener"><AiFillGithub /></a>
        </div><div>
            <a href='https://www.instagram.com/riyaz_ul_haq_mansuri/?hl=en' target='_blank' rel="noreferrer noopener"><BsInstagram /></a>
        </div>
    </div >
);

export default SocialMedia;