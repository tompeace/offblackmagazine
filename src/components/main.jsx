
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
                    <div className='z1 bg-white mr3 ml3 mt3 p2 fixed top-0 left-0 right-0 border border-black line-height-2'>
                        Anthology Issue A/W 2017
                    </div>
                    <div className='marquee z1 bg-white mr3 ml3 mb3 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
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
                                borderClass='border-top border-bottom border-left border-right border-black'
                                interval={2000}
                                items={[
                                    {src: './build/images/OB_left-01.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-02.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-03-04.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-03-04.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-05-06.gif', format: 'gif'},
                                    {src: './build/images/OB_left-05-06.gif', format: 'gif'},
                                    {src: './build/images/OB_left-07.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-08-09.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-08-09.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-10.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-11.jpg', format: 'jpg'},
                                    {src: './build/images/OB_left-12.jpg', format: 'jpg'}
                                ]}
                            />
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-2'
                                borderClass='border-top border-bottom border-right border-black'
                                interval={2000}
                                items={[
                                    {src: './build/images/OB_right-01.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-02-03.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-02-03.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-04-05.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-04-05.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-06-07.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-06-07.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-08.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-09-10.gif', format: 'gif'},
                                    {src: './build/images/OB_right-09-10.gif', format: 'gif'},
                                    {src: './build/images/OB_right-11-12.jpg', format: 'jpg'},
                                    {src: './build/images/OB_right-11-12.jpg', format: 'jpg'}
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
