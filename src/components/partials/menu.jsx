
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
                            src='/'
                            className='block pb2 cursor-pointer line-through'>
                            Anthology
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through inactive-link'>
                            The Future is: Theirs
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through inactive-link'>
                            Man Made
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through inactive-link'>
                            Raw
                        </a>
                        <a
                            src='http://offblackmagazine.com/archive-cult'
                            className='block pb2 cursor-pointer line-through'>
                            Cult
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through inactive-link'>
                            Double
                        </a>
                        <a
                            src='http://offblackmagazine.com/archive/the-body'
                            className='block pb2 mb4 cursor-pointer line-through'>
                            The Body
                        </a>
                    </div>
                    <div className='border-bottom p2'>
                        <a className='cursor-pointer line-through' href="">About</a>
                    </div>
                    <div className='border-bottom p2'>
                        <a className='cursor-pointer line-through' href="">Contributors</a>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Menu
