import { Link } from 'react-router-dom'
//
// // The Header creates links that can be used to navigate
// // between routes.
// const Header = () => (
//   <header className='z1 relative clearfix'>
//     <div>
//     <div className='z1 fixed left-0 right-0 top-0 bg-white mr3 ml3 mt3 p2 border border-black line-height-2'>
//        Anthology Issue A/W 2017
//        <nav className='pt5'>
//            <ul>
//                <li><Link to='/'>Home</Link></li>
//                <li><Link to='/stories'>Stories</Link></li>
//                <li><Link to='/events'>Events</Link></li>
//            </ul>
//        </nav>
//     </div>
//     <div className='marquee z1 bg-white mr3 ml3 mb3 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
//         <div className='marquee'>
//             <span>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</span>
//         </div>
//     </div>
//     </div>
//   </header>
// )

class Header extends React.Component {

    constructor() {
        super()
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            menuActive: false
        }
    }

    handleToggle() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        return (
            <header className='z1 relative clearfix'>
                <div style={{height: '67px'}} className="col-12"></div>
                <div>
                    <div className={`z1 fixed left-0 right-0 top-0 ${this.state.menuActive ? 'bottom-0' :''}`}>
                        <div className="bg-white mr3 ml3 mt3 p2 border border-black line-height-2">
                            Anthology Issue A/W 2017
                            <span
                                onClick={this.handleToggle}
                                className="right">Menu</span>
                        </div>
                        {this.state.menuActive && (
                            <div className="mt3 mr3 bg-white border col-right col-6">
                                <nav className=''>
                                    <ul className='list-reset m0'>
                                        <li className='border-bottom'><Link className='m3 block' to='/'>Home</Link></li>
                                        <li className='border-bottom'><Link className='m3 block' to='/stories'>Stories</Link></li>
                                        <li><Link className='m3 block' to='/about'>About</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                    <div className='marquee z1 bg-white mr3 ml3 mb3 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
                        <div className='marquee'>
                            <span>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</span>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header
