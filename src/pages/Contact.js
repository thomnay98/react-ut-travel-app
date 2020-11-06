import React, { Component } from 'react';
import { ImPhone, ImMail, ImMap } from "react-icons/im";
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h2>Liên hệ</h2>
                <p>Dưới đây là thông tin liên hệ cũng như đóng góp ý kiến cho chúng tôi.</p>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4>Thông tin liên hệ</h4>
                        <div className="icon-wrapper">
                            <div className="icon-text">
                                <div className="icon">
                                    <ImPhone />
                                </div>
                                <span>0344475656</span>
                            </div>
                            <div className="icon-text">
                                <div className="icon">
                                    <ImMail />
                                </div>
                                <span>thomnay98@gmail.com</span>
                            </div>
                            <div className="icon-text">
                                <div className="icon">
                                    <ImMap />
                                </div>
                                <span>51/15 Tân Hòa - Đông Hòa - Dĩ An - Bình Dương</span>
                            </div>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                            <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaGithub /></a>
                            <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                            <a href="https://www.facebook.com/akashi.tmn" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <h4>Góp ý cho chúng tôi</h4>
                            <div className="input-box">
                                <input type="text" name="fullName" required="required" />
                                <span>Họ và tên</span>
                            </div>
                            <div className="input-box">
                                <input type="text" name="email" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <textarea required="required" />
                                <span>Nội dung</span>
                            </div>
                            <button>Gửi</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;