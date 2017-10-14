
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
                className="mt3 mr3 bg-white border col-right col-12 sm-col-6">
                <nav>
                    <div className='border-bottom p2'>
                        Issues
                    </div>
                    <div className="border-bottom p2">
                        <a
                            target='_blank'
                            href='/'
                            className='block pb2 cursor-pointer hover-line-through'>
                            Anthology
                        </a>
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
                        <a className='cursor-pointer line-through' href="/past/about">About</a>
                    </div>
                    <div className='border-bottom p2'>
                        <a className='cursor-pointer line-through' href="/past/contributors">Contributors</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu
