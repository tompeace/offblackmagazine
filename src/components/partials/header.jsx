import { Link } from 'react-router-dom'
import Menu from './menu.jsx'

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
                <div>
                    <div className={`z1 fixed left-0 right-0 top-0 ${this.state.menuActive ? 'bottom-0' :''}`}>
                        <div className='bg-white mr3 ml3 mt3 p2 border border-black line-height-2'>
                            <Link className='cursor-pointer' to='/stories'>
                                Anthology Issue A/W 2017
                            </Link>
                            <span
                                onClick={this.handleToggle}
                                className='right cursor-pointer hover-skew'>
                                Menu
                            </span>
                        </div>
                        {this.state.menuActive && (
                            <div className='cursor-pointer'>
                                <Menu onHandleToggle={this.handleToggle} />
                            </div>
                        )}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
