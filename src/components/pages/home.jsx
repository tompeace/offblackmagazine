import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../partials/carousel.jsx'
import Menu from '../partials/menu.jsx'

class Home extends React.Component {

    render() {
        return (
            <section className='relative height-100 overflow-hidden'>
                <Link to='/stories'>
                    <div className='table'>
                        <div className='tr'>
                            <Carousel
                                imgClassName='center-carousel-img right'
                                className='td td-1'
                                borderClass='border-top border-bottom border-left border-right border-black'
                                interval={2000}
                                items={[
                                    {src: './build/images/OB_left-01.jpg'},
                                    {src: './build/images/OB_left-02.jpg'},
                                    {src: './build/images/OB_left-03-04.jpg'},
                                    {src: './build/images/OB_left-03-04.jpg'},
                                    {src: './build/images/OB_left-05-06.gif'},
                                    {src: './build/images/OB_left-05-06.gif'},
                                    {src: './build/images/OB_left-07.jpg'},
                                    {src: './build/images/OB_left-08-09.jpg'},
                                    {src: './build/images/OB_left-08-09.jpg'},
                                    {src: './build/images/OB_left-10.jpg'},
                                    {src: './build/images/OB_left-11.jpg'},
                                    {src: './build/images/OB_left-12.jpg'}
                                ]}
                            />
                            <Carousel
                                imgClassName='center-carousel-img'
                                className='td td-2'
                                borderClass='border-left border-top border-bottom border-right border-black'
                                interval={2000}
                                items={[
                                    {src: './build/images/OB_right-01.jpg'},
                                    {src: './build/images/OB_right-02-03.jpg'},
                                    {src: './build/images/OB_right-02-03.jpg'},
                                    {src: './build/images/OB_right-04-05.jpg'},
                                    {src: './build/images/OB_right-04-05.jpg'},
                                    {src: './build/images/OB_right-06-07.jpg'},
                                    {src: './build/images/OB_right-06-07.jpg'},
                                    {src: './build/images/OB_right-08.jpg'},
                                    {src: './build/images/OB_right-09-10.gif'},
                                    {src: './build/images/OB_right-09-10.gif'},
                                    {src: './build/images/OB_right-11-12.jpg'},
                                    {src: './build/images/OB_right-11-12.jpg'}
                                ]}
                            />
                        </div>
                    </div>
                </Link>
            </section>
        )
    }
}

export default Home
