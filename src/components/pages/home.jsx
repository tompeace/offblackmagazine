import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../partials/carousel.jsx'
import Menu from '../partials/menu.jsx'

class Home extends React.Component {

    render() {
        return (
            <section className='relative height-100 overflow-hidden'>
                <Link to='/stories'>
                    <div className='fixed top-0 bottom-0 left-0 right-0'>
                        <div className='v-centre'>
                            <Carousel
                                imgClassName=''
                                className='col col-6'
                                borderClass='border border-black'
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
                                imgClassName=''
                                className='col-right col-6'
                                borderClass='border-top border-bottom border-right border-black'
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
