import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import defaultImg from '../images/defaultBg.jpg';
import { formatNumber } from './formatNumber';

export default class Tour extends Component {
    render() {

        const { name, slug, time, images, price } = this.props.tour
        console.log(images);

        return (
            <article className="tour-card">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt={name} />
                    <div className="tour-card_price">
                        <h6>{formatNumber(price)} đ</h6>
                        <p>{time}</p>
                    </div>
                    <Link to={`/tour-du-lich/${slug}`} className="btn-primary btn-hot-tour">
                        Chi tiết
                    </Link>
                </div>
                <p className="tour-hot_name">{name}</p>
            </article>
        );
    }
}

Tour.propTypes = {
    tour: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
};