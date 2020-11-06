import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBgImg from '../components/TopBgImg';
import TopBanner from '../components/TopBanner';
import Services from '../components/Services';
import HotTours from '../components/HotTours';
import NewTours from '../components/NewTours';

import { formatNumber } from '../components/formatNumber';

import { TourContext } from '../context';

class Home extends Component {

    static contextType = TourContext;

    render() {

        let { toursHot: tours } = this.context;
        if(tours.length > 0){
            return (
                <>
                    <TopBgImg>
                        <TopBanner title={`Du lịch ${tours[1].name}`} subTitle={`Trọn gói chỉ ${formatNumber(tours[1].price)} đ`}>
                            <Link to={`/tour-du-lich/${tours[1].slug}`} className="btn-primary">Chi tiết</Link>
                        </TopBanner>
                    </TopBgImg>
                    <Services />
                    <HotTours />
                    <NewTours />
                </>
            )
        }

        return (
            <>
                <TopBgImg>
                </TopBgImg>
                <Services />
                <HotTours />
                <NewTours />
            </>
        );
    }
}

export default Home;