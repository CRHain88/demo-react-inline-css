import React, { Component } from 'react';
import CardMedia from './card-media.js';
import CardContent from './card-content.js';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardIsHovered: false,
            cardType: 'standard'
        };
    }

    render() {
        const style = {
            cardContainer: {
                position: 'relative'
            }
        };

        return (
            <div
                style={style.cardContainer}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                <CardMedia
                    showHoverState={this.state.cardIsHovered}
                    showMediaIcon={(this.state.cardType === 'standard')}
                />
                <CardContent
                    cardType={this.state.cardType}
                    showDescription={this.state.cardType !== 'belted'}
                    showHoverState={this.state.cardIsHovered}
                />
            </div>
        );
    }

    handleMouseOver() {
        this.setState({ cardIsHovered: true });
    }

    handleMouseOut() {
        this.setState({ cardIsHovered: false });
    }
}

var old = (
    <article
        class="cd cd--card cd--article cd--idx-0 cd--large cd--vertical cd--has-siblings cd--has-media cd--media__image"
        data-vr-contentbox="http://www.cnn.com/2015/05/04/tech/mci-endless-computer-desktop-pc-emerging-markets/"
        data-eq-pts="xsmall: 0, small: 300, medium: 460, large: 780, full16x9: 1100"
        data-eq-state="small"
    >
        <div
            class="cd__wrapper"
            data-analytics="Politics_list-hierarchical-xs_article_"
        >
            <div class="media">
                <a href="http://www.cnn.com/2015/05/04/tech/mci-endless-computer-desktop-pc-emerging-markets/" onclick="CNN.Analytics.utils.clickEventTracker(event, 'hpt=cGFnZV8xNGNvbF9ob21lcGFnZV9pbmRleF96b25lLTAtMl9uby12YWx1ZS1zZXRfY24tY292ZXJhZ2VDb250YWluZXJfRTc5RDlCNUQtQTIzMi02QTVBLTk5MzItRDhFRkEyQUQ2REU0X1BvbGl0aWNz;hpt2=cGFnZV8xNGNvbF9ob21lcGFnZV9pbmRleF96b25lLTAtMl9iYWxhbmNlZF9jbi1jb3ZlcmFnZUNvbnRhaW5lcl9FNzlEOUI1RC1BMjMyLTZBNUEtOTkzMi1EOEVGQTJBRDZERTRfbGVhZCtsaXN0OmxlYWQraGVhZGxpbmVz')">
                    <img
                        class="media__image media__image--responsive"
                        src="http://i2.cdn.turner.com/cnnnext/dam/assets/150428170234-endless-with-package-large-169.jpg"
                    />
                    <div class="img__preloader"></div>
                    <noscript>&lt;img alt="You will see plenty of smartphones in the developing world and you'll see plenty of TVs; but you're unlikely to see desktop computers in remote areas." class="media__image" src="http://i2.cdn.turner.com/cnnnext/dam/assets/160305224352-03-trump-0305-large-tease.jpg"&gt;</noscript>
                </a>
            </div>
            <div class="cd__content">
                <h3 class="cd__headline" data-analytics="Politics_list-hierarchical-xs_article_">
                <a href="http://www.cnn.com/2015/05/04/tech/mci-endless-computer-desktop-pc-emerging-markets/" onclick="CNN.Analytics.utils.clickEventTracker(event, 'hpt=cGFnZV8xNGNvbF9ob21lcGFnZV9pbmRleF96b25lLTAtMl9uby12YWx1ZS1zZXRfY24tY292ZXJhZ2VDb250YWluZXJfRTc5RDlCNUQtQTIzMi02QTVBLTk5MzItRDhFRkEyQUQ2REU0X1BvbGl0aWNz;hpt2=cGFnZV8xNGNvbF9ob21lcGFnZV9pbmRleF96b25lLTAtMl9iYWxhbmNlZF9jbi1jb3ZlcmFnZUNvbnRhaW5lcl9FNzlEOUI1RC1BMjMyLTZBNUEtOTkzMi1EOEVGQTJBRDZERTRfbGVhZCtsaXN0OmxlYWQraGVhZGxpbmVz')">
                    <span class="cd__headline-text">The next big thing in tech: The desktop computer (yes, really)</span>
                    <span class="cd__headline-icon"></span>
                </a>
                </h3>
            </div>
        </div>
    </article>
)
