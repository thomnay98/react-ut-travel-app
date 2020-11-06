import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBgImg from '../components/TopBgImg';
import TopBanner from '../components/TopBanner';
import TourContainer from '../components/TourContainer';

class Tours extends Component {
    render() {
        return (
            <>
                <TopBgImg styleBg="tourBgImg">
                    <TopBanner title="Các tour du lịch chúng tôi cung cấp">
                        <Link to="/" className="btn-primary">Về trang chủ</Link>
                    </TopBanner>
                </TopBgImg>
                <TourContainer />
            </>
        );
    }
}

export default Tours;