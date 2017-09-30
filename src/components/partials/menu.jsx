import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div className="mt3 mr3 bg-white border col-right col-6">
                <nav className=''>
                    <ul className='list-reset m0'>
                        <li className='border-bottom'><Link className='m3 block' to='/'>Home</Link></li>
                        <li className='border-bottom'><Link className='m3 block' to='/stories'>Stories</Link></li>
                        <li><Link className='m3 block' to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Menu
