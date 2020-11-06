import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-wrapper">
                    <div className="nav-header">
                        <Link to="/" className="nav-logo">UT Travel</Link>
                        <button className="nav-btn"
                                onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/tour-du-lich">Tour du lịch</Link>
                        </li>
                        <li>
                            <Link to="/lien-he">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;