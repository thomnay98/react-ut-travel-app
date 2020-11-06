import React, { Component } from 'react';

import { TourContext } from '../context';

import Title from './Title';
import Loading from './Loading';
import Tour from './Tour';

class NewTours extends Component {

    static contextType = TourContext;
    render() {

        let { loading, toursNew: tours} = this.context;
        tours = tours.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        });
        return (
            <section className="new-tours">
                <Title title={"Tours mới nhất"} />
                <div className="hot-tours-center">
                    {loading ? <Loading /> : tours}
                </div>
            </section>
        );
    }
}

export default NewTours;