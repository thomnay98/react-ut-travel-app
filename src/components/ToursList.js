import React, {Suspense, lazy} from 'react';
// import Tour from './Tour';

import Loading from './Loading';

const Tour = lazy(()=>import('./Tour'));

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
                    return (
                        <Suspense fallback={<Loading />}>
                            <Tour key={tour.id} tour={tour} />
                        </Suspense>
                    )
                })}
            </div>
        </section>
    );
}

export default ToursList;