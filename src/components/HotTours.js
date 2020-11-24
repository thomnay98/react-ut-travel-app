import React, { Component, Suspense, lazy } from 'react';

import { TourContext } from '../context';

import Title from './Title';
import Loading from './Loading';
// import Tour from './Tour';

const Tour = lazy(()=>import('./Tour'));

class HotTours extends Component {

    static contextType = TourContext;

    render() {

        let { loading, toursHot: tours } = this.context;
        tours = tours.map(tour => {
            return (
                <Suspense fallback={<Loading />}>
                    <Tour key={tour.id} tour={tour} />
                </Suspense>
            )
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