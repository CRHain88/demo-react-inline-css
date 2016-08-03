import React, { Component } from 'react';

export default class CardContent extends Component {
    render() {
        const style = {
            linkText: {
                color: 'black',
                fontFamily: 'sans-serif',
                textDecoration: 'none'
            },
            headline: {
                margin: 0,
                transition: 'color .1s ease-in-out',
                color: (this.props.showHoverState) ? 'red' : '#000'
            },
            description: {
                display: (this.props.showDescription) ? null : 'none'
            },
            wrapper: {
                belted: {
                    background: '#ccc',
                    margin: '-3em 25% 0',
                    padding: '1em',
                    position: 'relative'
                },
                contained: {
                    bottom: 0,
                    background: 'rgba(255,255,255,.7)',
                    padding: '1em',
                    position: 'absolute'
                }
            }
        };

        const generateWrapperStyles = () => {
            switch (this.props.cardType) {
                case 'belted':
                    return style.wrapper.belted;
                    break;
                case 'contained':
                    return style.wrapper.contained;
                    break;
                default:
                    return null
            }
        };

        return (
            <a
                style={style.linkText}
                href="http://www.cnn.com/2015/05/04/tech/mci-endless-computer-desktop-pc-emerging-markets/?iid=ob_homepage_tech_pool&iref=obnetwork"
            >
                <div style={generateWrapperStyles()}>
                    <h1 style={style.headline}>The next big thing in tech: The desktop computer (yes, really)</h1>
                    <p style={style.description}>You will see plenty of smartphones in the developing world and you'll see plenty of TVs; but you're unlikely to see desktop computers in remote areas.</p>
                </div>
            </a>
        );
    }
}
