import React, { Component } from 'react';

export default class CardMedia extends Component {
    render() {
        const style = {
            wrapper: {
                position: 'relative'
            },
            image: {
                display: 'block'
            },
            timestamp: {
                background: 'rgba(0,0,0,.5)',
                bottom: 0,
                color: (this.props.showHoverState) ? 'red' : '#fff',
                display: (this.props.showMediaIcon) ? null : 'none',
                fontFamily: 'sans-serif',
                fontSize: '.8em',
                left: 0,
                padding: '1em',
                position: 'absolute',
                transition: 'color .1s ease-in-out'
            }
        };

        return (
            <a href="http://www.cnn.com/2015/05/04/tech/mci-endless-computer-desktop-pc-emerging-markets/?iid=ob_homepage_tech_pool&iref=obnetwork">
                <div style={style.wrapper}>
                    <img style={style.image} width="100%" src="http://i2.cdn.turner.com/cnnnext/dam/assets/150428170234-endless-with-package-super-169.jpg" />
                    <span style={style.timestamp}>1:42</span>
                </div>
            </a>
        );
    }
}
