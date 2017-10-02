
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
            <div onBlur={this.handleBlur} className="mt3 mr3 bg-white border col-right col-6">
                <nav className=''>
                    <ul className='list-reset m0'>
                        <li className='border-bottom'>
                            <Link
                                to='/'
                                onClick={this.handleToggle}
                                className='m3 block'>
                                Home
                            </Link>
                        </li>
                        <li className='border-bottom'>
                            <Link
                                to='/stories'
                                onClick={this.handleToggle}
                                className='m3 block'>
                                Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                onClick={this.handleToggle}
                                className='m3 block'>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Menu
