import React from 'react'
import "../Stylecss/Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import green from "@material-ui/core/colors/green";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__left__image">
                    <img className="footer__image" src="https://www.wishaffair.com/assets/logo-md.png" alt="wishaffair" />
                </div>

                <div className="footer__left__icon">
                    <FacebookIcon style={{color:"green"}} className="footer__fbIcon" />
                    <TwitterIcon style={{color:"green"}}  className="footer__twitIcon" />
                </div>



            </div>

            <div className="footer__right">
                <div className="footer__right__left">
                    <p>About Wish Affair</p>
                    <p>Careers</p>
                    <p>Help</p>
                    <p>Press</p>
                    <p>Blogs</p>
                    <p>FAQ's</p>
                </div>
                <div className="footer__right__right">
                    <p>Ask Our Experts</p>
                    <p>Returns</p>
                    <p>Fing a Couple</p>
                    <p>Contact US</p>
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
