import React from 'react'

class Carousel extends React.Component {

    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        setInterval(this.tick.bind(this), this.props.interval || 1000);
    }

    tick() {
        let i = this.state.index + 1;
        if (i < 0) {
            i = this.props.images.length - 1;
        } else if (i > this.props.images.length - 1) {
            i = 0;
        }
        this.setState({index: i});
    }

    render() {
        let images
        if (this.props.images) {
            images = this.props.images.map((image, i) => {
                const hide = this.state.index === i ? '' : 'hide'
                return (
                    <img
                        key={i}
                        className={`${hide} height-100 col-12`}
                        src={image} />
                )
            })
        } else {
            images = <div className='height-100 col-12 crossed' />
        }

        return (
            <div className='height-100 overflow-hidden'>
                {images}
            </div>
        )
    }
}

export default Carousel
