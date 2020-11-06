import React, { Component } from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="footer-icon">
                        <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaGitlab /></a>
                    </div>
                    &copy; 2020 by Nay Thom
                </div>
            </footer>
        );
    }
}

export default Footer;