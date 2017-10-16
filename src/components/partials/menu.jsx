
import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = props.onHandleToggle.bind(this)
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.handleToggle}
                    className='absolute top-0 bottom-0 left-0 right-0' />
                <div
                    style={{minHeight: 'calc(100vh - 110px)'}}
                    className="relative container-menu mt3 mr3 bg-white border col-right col-12 sm-col-6">
                    <nav>
                        <div className='border-bottom p2'>
                            Issues
                        </div>
                        <div className="border-bottom p2">
                            <Link
                                to='/stories'
                                className='block pb2 cursor-pointer hover-line-through'>
                                Anthology
                            </Link>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/past/issues/the-future-is-theirs/'
                                className='block pb2 cursor-pointer hover-line-through'>
                                THE FUTURE IS: THEIRS
                            </a>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/past/issues/man-made/'
                                className='block pb2 cursor-pointer hover-line-through'>
                                Man Made
                            </a>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/past/issues/raw/'
                                className='block pb2 cursor-pointer hover-line-through'>
                                Raw
                            </a>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/archive-cult'
                                className='block pb2 cursor-pointer hover-line-through'>
                                Cult
                            </a>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/archive/double/'
                                className='block pb2 cursor-pointer hover-line-through'>
                                Double
                            </a>
                            <a
                                target='_blank'
                                href='http://offblackmagazine.com/archive/the-body'
                                className='block pb2 mb4 cursor-pointer hover-line-through'>
                                The Body
                            </a>
                        </div>
                        <div className='border-bottom p2'>
                            <Link
                                onClick={this.handleToggle}
                                className='cursor-pointer hover-line-through'
                                to='/about'>
                                About
                            </Link>
                        </div>
                        <div className='border-bottom p2'>
                            <Link
                                onClick={this.handleToggle}
                                className='cursor-pointer hover-line-through'
                                to='/contributors'>
                                Contributors
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu
