import React, { Component } from 'react';

import { TourContext } from '../context';

import Title from './Title';
import Loading from './Loading';
import Tour from './Tour';

class HotTours extends Component {

    static contextType = TourContext;

    render() {

        let { loading, toursHot: tours } = this.context;
        tours = tours.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        })

        return (
            <section className="hot-tours">
                <Title title={"Tours phổ biến nhất"} />
                <div className="hot-tours-center">
                    {loading ? <Loading /> : tours}
                </div>
            </section>
        );
    }
}

export default HotTours;