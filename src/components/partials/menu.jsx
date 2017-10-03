
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
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            Anthology
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            <span style={{pointerEvents: 'none'}}>
                                The Future is: Theirs
                            </span>
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            Man Made
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            Raw
                        </a>
                        <a
                            src='http://offblackmagazine.com/archive-cult'
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            Cult
                        </a>
                        <a
                            src='/'
                            className='block pb2 cursor-pointer line-through'
                            onClick={this.handleToggle}>
                            Double
                        </a>
                        <a
                            src='/'
                            className='block pb2 mb4 cursor-pointer line-through'
                            onClick={this.handleToggle}>
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
