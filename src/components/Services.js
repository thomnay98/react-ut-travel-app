import React, { Component } from 'react';
import { FaMoneyBillWave, FaRegThumbsUp, FaRegQuestionCircle, FaShieldAlt } from 'react-icons/fa';

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaMoneyBillWave />,
                title: "Giá Tốt - Nhiều Ưu Đãi",
                info: "Giá cạnh tranh và nhiều chương trình ưu đãi",
            },
            {
                icon: <FaRegThumbsUp />,
                title: "Chất Lượng",
                info: "Chất lượng tour tốt nhất trong các công ty",
            },
            {
                icon: <FaRegQuestionCircle />,
                title: "Tư Vấn Tận Tình",
                info: "Hỗ trợ tư vấn online tất cả các ngày trong tuần",
            },
            {
                icon: <FaShieldAlt />,
                title: "Thương Hiệu Uy Tín",
                info: "Thương hiệu lữ hành hàng đầu Việt Nam",
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <div className="services-area">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service-item">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;