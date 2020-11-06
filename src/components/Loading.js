import React, { Component } from 'react';

import loadingGif from '../images/gif/loading-gif.gif';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <h4>Đang tải dữ liệu...</h4>
                <img src={loadingGif} alt="" />
            </div>
        );
    }
}

export default Loading;