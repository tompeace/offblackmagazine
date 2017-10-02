
import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = props.onHandleToggle.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleBlur() {
        console.log('blurrrr');
    }

    render() {
        return (
            <div
                onClick={()=>console.log('click')}
                onBlur={this.handleBlur}
                style={{minHeight: 'calc(100vh - 110px)'}}
                className="mt3 mr3 bg-white border col-right col-6">
                <nav>
                    <div className='border-bottom p2'>
                        Anthology Issue A/W 2017
                    </div>
                    <div className='p2 border-bottom block clearfix'>
                        <div
                            onClick={this.handleToggle}
                            className="right">
                            Close
                        </div>
                    </div>
                    <div className='border-bottom p2'>
                        Issues
                    </div>
                    <div className="border-bottom p2">
                        <a
                            src='/'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            Anthology
                        </a>
                        <a
                            src='/'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            <span style={{textDecoration: 'line-through'}}>
                                The Future is: Theirs
                            </span>
                        </a>
                        <a
                            src='/'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            Man Made
                        </a>
                        <a
                            src='/'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            Raw
                        </a>
                        <a
                            src='http://offblackmagazine.com/archive-cult'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            Cult
                        </a>
                        <a
                            src='/'
                            className='block pb2'
                            onClick={this.handleToggle}>
                            Double
                        </a>
                        <a
                            src='/'
                            className='block pb2 mb4'
                            onClick={this.handleToggle}>
                            The Body
                        </a>
                    </div>
                    <div className='border-bottom p2'>
                        <a href="">About</a>
                    </div>
                    <div className='border-bottom p2'>
                        <a href="">Contributors</a>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Menu
