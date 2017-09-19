
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
                        <Carousel
                            interval={10000}
                            className='height-100'
                            imgClassName='col-12 height-100'
                            items={[
                                {src: './assets/dest/images/OB_background-02.jpg', format: 'jpg'},
                                {src: './assets/dest/images/OB_background-09.mp4', format: 'mp4'}
                            ]}
                        />
                    </div>
                    <div className='z1 bg-white mr4 ml4 mt4 p3 fixed top-0 left-0 right-0 border border-black'>
                        <div
                            onClick={this.handleToggle}
                            className='cursor-pointer right'>
                            Menu
                        </div>
                        <div className='overflow-hidden'>
                            OFFBLACKMAGAZINE 2017
                        </div>
                    </div>
                    <div className='z1 bg-white mr4 ml4 mb4 p3 fixed bottom-0 left-0 right-0 border border-black overflow-hidden'>
                        COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON
                    </div>
                </div>
                <div>
                    <div className='table'>
                        <div className='tr border border-black'>
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-1'
                                interval={4000}
                                items={[
                                    {src: './assets/dest/images/OB_left-01.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-02.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-03-04.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-05-06.mov', format: 'mov'},
                                    {src: './assets/dest/images/OB_left-07.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-08-09.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-10.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-11.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_left-12.svg', format: 'svg'}
                                ]}
                            />
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-2'
                                interval={4000}
                                items={[
                                    {src: './assets/dest/images/OB_right-01.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-02-03.mp4', format: 'mp4'},
                                    {src: './assets/dest/images/OB_right-04-05.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-06-07.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-08.jpg', format: 'jpg'},
                                    {src: './assets/dest/images/OB_right-09-10.svg', format: 'svg'},
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
