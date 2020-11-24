import React, { Component } from 'react';
import defaultBg from "../images/defaultBg.jpg";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { VscLoading } from "react-icons/vsc";
import { FaCar, FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiEuropeanFlag, GiBlackFlag } from "react-icons/gi";
import { BiDotsVerticalRounded } from "react-icons/bi";

import StyledTopImg from '../components/StyledTopImg';
import Banner from '../components/TopBanner';
import { TourContext } from '../context';
import { formatNumber } from '../components/formatNumber';

class TourDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg
        };
    }

    static contextType = TourContext;

    render() {
        const { getTour } = this.context;
        const tour = getTour(this.state.slug);
        console.log(tour);
        if(!tour){
            return (
                <div className="error">
                    <h3>Không tìm thấy tour...</h3>
                    <Link to="/tour-du-lich" className="btn-primary">Tìm Tour</Link>
                </div>
            )
        }
        const { name, intro, start, price, time, vehicle, activity, images } = tour;

        return (
            <div className="container">  
                <StyledTopImg img={images[0]}>
                    <Banner title={name}>
                        <Link to="/tour-du-lich" className="btn-primary">
                            Tìm tour khác
                        </Link>
                    </Banner>
                </StyledTopImg>
                <section className="tourDetail-container">
                    <div className="content-slider-wrapper">
                        <div className="top-column slider">
                            <Carousel
                                    showArrows={false} 
                                    autoPlay 
                                    interval="2000" 
                                    transitionTime="1000"
                            >
                                {images.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item} alt={name} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        
                        <div className="top-column content">
                            <div className="content-title">
                                <h4>{name}</h4>
                                <p>{intro}</p>
                            </div>
                            <hr />
                            <div className="content-item">
                                <span>
                                    <VscLoading />
                                    <p>Khởi hành: {start}</p>
                                </span>
                                <span>
                                    <FaRegCalendarAlt />
                                    <p>Thời gian: {time}</p>
                                </span>
                                <span>
                                    <FaCar />
                                    <p>Phương tiện: {vehicle}</p>
                                </span>
                            </div>
                            <hr />
                            <div className="content-price">
                                <label>Giá Tiền</label>
                                <p>{formatNumber(price)} đ</p>
                            </div>
                            <button className="btn-detailTour">Đặt Tour</button>
                        </div>
                    </div>
                    <div className="tourDetail-tour">
                        <div className="tourDetail-tour-wrapper">
                            <p>Chương trình tour</p>
                            <div className="tourDetail-tour-item">
                                {activity.map((act, index) => {
                                    return (
                                        <article key={index}>
                                            <span>
                                                <BiDotsVerticalRounded className={index===0?"dot-icon":null} />
                                                <hr className={index===0?"hr-space":null} />
                                            </span>
                                            <span>
                                                {
                                                    index === 0 &&
                                                    <FaMapMarkerAlt />
                                                }
                                                {
                                                    index === activity.length-1 &&
                                                    <GiBlackFlag />
                                                }
                                                {
                                                    index !== 0 && index !== activity.length-1 &&
                                                    <GiEuropeanFlag />
                                                }
                                                <p key={index}>{act}</p>
                                            </span>
                                        </article> 
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TourDetail;