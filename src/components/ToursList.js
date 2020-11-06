import React from 'react';
import Tour from './Tour';

function ToursList ({ tours }) {
    if(tours.length === 0){
        return (
            <div className="empty-tours">
                <h3>Không tìm thấy tours theo yêu cầu</h3>
            </div>
        )
    }
    return (
        <section className="toursList">
            <div className="toursList-center">
                {tours.map(tour=>{
                    return <Tour key={tour.id} tour={tour} />
                })}
            </div>
        </section>
    );
}

export default ToursList;