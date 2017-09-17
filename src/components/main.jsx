
import React from 'react'
import Carousel from './carousel.jsx'

class Main extends React.Component {
    render() {
        return (
            <main className='relative height-100 overflow-hidden'>
                <div className="zn1 absolute top-0 bottom-0 left-0 right-0">
                    <Carousel
                        interval={3500}
                        images={[
                        './assets/dest/images/ob_cover_01.jpg',
                        './assets/dest/images/ob_cover_02.jpg'
                    ]}/>
                </div>
                <div className='bg-white mt4 p2 absolute top-0 left-0 right-0 border border-black'>
                    OFFBLACKMAGAZINE 2017
                </div>

                <div className='height-100 my2 clearfix container'>
                    <div className="height-100 border border-black col col-6">
                        <Carousel
                            interval={2100}
                            images={[
                            './assets/dest/images/ob_cover_03.jpg',
                            './assets/dest/images/ob_cover_02.jpg'
                        ]}/>
                    </div>
                    <div className="mln1px height-100 border border-black col col-6">
                        <Carousel
                            interval={2700}
                            images={[
                            './assets/dest/images/ob_cover_01.jpg',
                            './assets/dest/images/ob_cover_02.jpg'
                        ]}/>
                    </div>
                </div>

                <div className='bg-white mb4 p2 absolute bottom-0 left-0 right-0 border border-black overflow-hidden'>
                    COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON
                </div>
            </main>
        )
    }
}

export default Main
