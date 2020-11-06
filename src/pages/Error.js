import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBgImg from '../components/TopBgImg';
import TopBanner from '../components/TopBanner';

class Error extends Component {
    render() {
        return (
            <TopBgImg>
                <TopBanner title="404" subTitle="Không tìm thấy trang">
                    <Link to="/" className="btn-primary">Về trang chủ</Link>
                </TopBanner>
            </TopBgImg>
        )
    }
}

export default Error;