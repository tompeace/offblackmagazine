import React from 'react';
import utilities from '../utilities';

class Default extends React.Component {
    render() {
        const style = this.props.style || {width:'100%',height:'350px'};
        return (
            <img
                className={this.props.className}
                style={style}
                src='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                alt='no image' />
        );
    }
};

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        if (this.refs.image) {
            var imageNode = this.refs.image;
            imageNode.src = imageNode.currentSrc || this.props.src;
            if (imageNode.complete) {
                this.handleOnLoad.call(this);
            } else {
                imageNode.onload = this.handleOnLoad.bind(this);
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loaded && !prevState.loaded) {
            window.requestAnimationFrame(() => {
                if (this.refs.image) {
                    this.refs.image.style.opacity = 1;
                }
            });
        }
    }

    componentWillUnmount() {
        if (this.refs.image && this.state.loaded === false) {
            var imageNode = this.refs.image;
            imageNode.src = imageNode.currentSrc || this.props.src;
            imageNode.onload = undefined;
        }
    }

    handleOnLoad() {
        if (this.props.onHasLoaded) {
            this.props.onHasLoaded();
        }

        this.setState({
            loaded: true
        });
    }

    render() {

        let image;
        let classes = this.props.className || '';
        let style = this.props.style || {};

        const fadeIn = this.state.loaded ? ' opacity-1' : ' opacity-0'

        if (this.props.src) {
            if (typeof this.props.src === 'string') {
                image = (
                    <img
                        ref='image'
                        className={`block transition-opacity ${classes} ${fadeIn}`}
                        style={style}
                        src={this.props.src}
                        alt={this.props.alt} />
                );
            } else {
                image = (
                    <Default className={this.props.className} />
                );
            }
        } else {
            image = (
                <Default className={this.props.className} />
            );
        }

        return image;

    }

};

export default Image;
