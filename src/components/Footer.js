import React, { Component } from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="footer-icon">
                        <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a href="https://github.com/thomnay98" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/thom-nay-aa67591ba/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="skype:live:.cid.30e30da4efb07016?call" rel="noreferrer"><FaSkype /></a>
                    </div>
                    &copy; 2020 by Nay Thom
                </div>
            </footer>
        );
    }
}

export default Footer;