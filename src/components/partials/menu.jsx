import React from 'react'
import Link from 'react-router-dom'

// Router Menu
// (
//     <div className="mt3 mr3 bg-white border col-right col-6">
//         <nav className=''>
//             <ul className='list-reset m0'>
//                 <li className='border-bottom'><Link className='m3 block' to='/'>Home</Link></li>
//                 <li className='border-bottom'><Link className='m3 block' to='/stories'>Stories</Link></li>
//                 <li><Link className='m3 block' to='/about'>About</Link></li>
//             </ul>
//         </nav>
//     </div>
// )


class Menu extends React.Component {

    render() {
        return (
            <div className='max-width-100 max-height-100 bg-white'>

                <div>
                    <div className='p2 border-bottom border-black'>Stories</div>
                    <div className='p2'>
                        <Link className='m3 block' to='/stories'>Stories</Link>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/man-made/">
                            man-made
                        </a>
                    </div>
                    <div className='p2 border-bottom border-black'>Issues</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/the-future-is-theirs/">
                            the-future-is-theirs
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/man-made/">
                            man-made
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/raw/">
                            raw
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive-cult/">
                            archive-cult
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive/">
                            archive
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive/the-body">
                            the-body
                        </a>
                    </div>
                </div>
                <div>
                    <div className='p2 border-bottom border-top border-black'>About</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/about/">About</a>
                    </div>
                </div>
                <div>
                    <div className='p2 border-bottom border-top border-black'>Contributors</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/contributors/">Contributors</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
