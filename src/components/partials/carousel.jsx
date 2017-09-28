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
            i = this.props.items.length - 1;
        } else if (i > this.props.items.length - 1) {
            i = 0;
        }
        this.setState({index: i});
    }

    render() {
        let items = this.props.items.map((item, i) => {
            let component
            const hide = this.state.index === i ? '' : 'hide'
            switch (item.format) {
                case 'jpg' :
                case 'gif' :
                    component = (
                        <img
                            className={`${this.props.imgClassName} ${this.props.borderClass} max-height-100 ${hide}`}
                            src={item.src} />
                    )
                    break;
                case 'mp4':
                    component = (
                        <video
                            muted={(item.opts && item.opts.video.muted) || this.state.index !== i}
                            preload
                            loop={true}
                            autoPlay='auto'
                            height='100%'
                            className={`${this.props.imgClassName} object-fit-cover ${this.props.borderClass} ${hide}`}>
                            <source
                                src={item.src}
                                type="video/mp4" />
                        </video>
                    )
                    break;
                case 'svg':
                    component = (
                        <object
                            className={`${this.props.imgClassName} ${this.props.borderClass} p0 max-height-100 ${hide}`}
                            data={item.src}
                            width='100%'
                            height='100%'
                            type="image/svg+xml">
                            <div className='height-100 col-12 crossed' />
                        </object>
                    )
                    break;
                default:
                    component = <div className='height-100 col-12 crossed' />

            }
            return (
                <div className='relative overflow-hidden max-height-100' key={i}>
                    {component}
                </div>
            )
        })

        return (
            <div className={this.props.className || ''}>
                {items}
            </div>
        )
    }
}

export default Carousel
