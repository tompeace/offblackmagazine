
import React from 'react'
import Carousel from '../partials/carousel.jsx'
import Menu from '../partials/menu.jsx'

class Home extends React.Component {

    render() {
        return (
            <main className='max-height-100 overflow-hidden'>
                <div className='my2 mx-auto'>
                    <div className='v-centre border border-black'>
                        <div className="col col-6 border-left border-black sm-show overflow-hidden">
                            <Carousel
                                interval={2100}
                                className='height-100'
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
                        </div>
                        <div className='mln1px col col-12 sm-col-6 overflow-hidden height-100 bg-white'>
                            <Carousel
                                interval={2700}
                                className='height-100'
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

export default Home
