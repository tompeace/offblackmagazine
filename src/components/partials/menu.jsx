
import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = props.onHandleToggle.bind(this)
    }

    render() {
        return (
            <div
                style={{minHeight: 'calc(100vh - 110px)'}}
                className="container-menu mt3 mr3 bg-white border col-right col-12 sm-col-6">
                <nav>
                    <div className='border-bottom p2'>
                        Issues
                    </div>
                    <div className="border-bottom p2">
                        <a
                            target='_blank'
                            href='/'
                            className='hover-skew block pb2 cursor-pointer hover-skew'>
                            Anthology
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/past/issues/the-future-is-theirs/'
                            className='block pb2 cursor-pointer hover-skew'>
                            The Future is Theirs
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/past/issues/man-made/'
                            className='block pb2 cursor-pointer hover-skew'>
                            Man Made
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/past/issues/raw/'
                            className='block pb2 cursor-pointer hover-skew'>
                            Raw
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/archive-cult'
                            className='block pb2 cursor-pointer hover-skew'>
                            Cult
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/archive/double/'
                            className='block pb2 cursor-pointer hover-skew'>
                            Double
                        </a>
                        <a
                            target='_blank'
                            href='http://offblackmagazine.com/archive/the-body'
                            className='block pb2 mb4 cursor-pointer hover-skew'>
                            The Body
                        </a>
                    </div>
                    <div className='border-bottom p2'>
                        <Link
                            onClick={this.handleToggle}
                            className='cursor-pointer hover-skew'
                            to='/about'>
                            About
                        </Link>
                    </div>
                    <div className='border-bottom p2'>
                        <Link
                            onClick={this.handleToggle}
                            className='cursor-pointer hover-skew'
                            to='/contributors'>
                            Contributors
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu
