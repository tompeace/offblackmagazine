
import React from 'react'
import Carousel from './carousel.jsx'
import Menu from './menu.jsx'

class Main extends React.Component {

    constructor() {
        super()
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            menuActive: false
        }
    }

    componentDidMount() {
        this.refs.video.playbackRate = 0.5
    }

    handleToggle() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        return (
            <main className='relative height-100 overflow-hidden'>
                <div>
                    <div className="zn1 absolute top-0 bottom-0 left-0 right-0">
                        <video
                            ref='video'
                            muted={true}
                            preload
                            loop={true}
                            autoPlay='auto'
                            height='100%'
                            className={'kajdshf'}>
                            <source
                                src='./assets/dest/images/OB_background-09.mp4'
                                type="video/mp4" />
                        </video>
                    </div>
                    <div className='z1 bg-white mr4 ml4 mt4 p2 fixed top-0 left-0 right-0 border border-black line-height-2'>
                        Anthology Issue A/W 2017
                    </div>
                    <div className='marquee z1 bg-white mr4 ml4 mb4 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
                        <div className='marquee'>
                            <span>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='table'>
                        <div className='tr'>
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-1'
                                interval={2000}
                                items={[
                                    {src: './assets/dest/images/OB_left-01.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-02.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-03-04.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-05-06.gif', format: 'gif'},
                                    {src: './assets/dest/images/OB_left-07.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-08-09.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-10.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-11.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-12.jpg', format: 'jpg'}
                                ]}
                            />
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-2'
                                interval={2000}
                                items={[
                                    {src: './assets/dest/images/OB_right-01.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-02-03.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-04-05.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-06-07.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-08.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-12.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-11-12.jpg', format: 'jpg'}
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main
