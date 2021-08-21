import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import { Twitter} from "@material-ui/icons";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';

import './footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="icon">
               <a  className="icn" href="https://www.instagram.com/pratham215" target="_blank" rel="noreferrer"><InstagramIcon  /></a>
               <a className="icn" href="https://twitter.com/Being_pratham07"><Twitter ></Twitter></a>
               <a className="icn" href="https://mail.google.com/"><MailOutlineIcon ></MailOutlineIcon></a>
               
            </div>
            <div className="f-content">
                <CopyrightIcon className="cp"></CopyrightIcon>
                <p>Designed By Pratham</p>
            </div>
        </div>
     );
}
 
export default Footer;