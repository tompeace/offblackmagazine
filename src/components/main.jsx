
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
                            interval={3500}
                            className='col-12 height-100'
                            images={[
                            './assets/dest/images/ob_cover_01.jpg',
                            './assets/dest/images/ob_cover_02.jpg'
                        ]}/>
                    </div>
                    <div className='z1 bg-white mt4 p3 fixed top-0 left-0 right-0 border border-black'>
                        <div
                            onClick={this.handleToggle}
                            className='cursor-pointer right'>
                            Menu
                        </div>
                        <div className='overflow-hidden'>
                            OFFBLACKMAGAZINE 2017
                        </div>
                    </div>
                    <div className='z1 bg-white mb4 p3 fixed bottom-0 left-0 right-0 border border-black overflow-hidden'>
                        COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON
                    </div>
                </div>

                <div className='my2 mx-auto'>
                    <div className='v-centre border border-black'>
                        <div className="col col-6 border-left border-black sm-show overflow-hidden">
                            <Carousel
                                interval={2100}
                                className='max-width-100 max-height-100'
                                images={[
                                './assets/dest/images/ob_cover_03.jpg',
                                './assets/dest/images/ob_cover_02.jpg'
                            ]}/>
                        </div>
                        <div className='mln1px col col-12 sm-col-6 overflow-hidden height-100 bg-white'>
                            {this.state.menuActive ? (
                                <Menu />
                            ) : (
                                <Carousel
                                    interval={2700}
                                    className='max-width-100 max-height-100'
                                    images={[
                                        './assets/dest/images/ob_cover_01.jpg',
                                        './assets/dest/images/ob_cover_02.jpg'
                                    ]}
                                />
                            )}
                        </div>
                    </div>
                </div>


            </main>
        )
    }
}

export default Main
