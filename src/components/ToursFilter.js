import React, { useContext } from 'react';

import { TourContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    let tempPlace = [...new Set(items.map(item => item[value]))];
    let places = [];
    for(var i = 0; i<tempPlace.length; i++){
        places.push(...tempPlace[i])
    }
    return places.filter((value, index) => places.indexOf(value) === index);
}

const getVehicle = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

function ToursFilter ({ tours }) {

    const context = useContext(TourContext);
    const { place, vehicle, price, minPrice, maxPrice, handleChange } = context;

    let places = getUnique(tours, "place");
    places = ["Tất cả", ...places.sort()];
    places = places.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        )
    })

    let vehicles = getVehicle(tours, "vehicle");
    vehicles = ["Tất cả",...vehicles];
    vehicles = vehicles.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="Tìm Tour"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="place">Địa điểm:</label>
                    <select
                        name="place"
                        id="place"
                        value={place}
                        onChange={handleChange}
                        className="form-select"
                    >
                        {places}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle">Phương tiện:</label>
                    <select
                        name="vehicle"
                        id="vehicle"
                        value={vehicle}
                        onChange={handleChange}
                        className="form-select"
                    >
                        {vehicles}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Giá tiền: {price} đ</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-select"
                    />
                </div>

            </form>
        </section>
    );
};

export default ToursFilter;