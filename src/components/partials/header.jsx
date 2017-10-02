import { Link } from 'react-router-dom'
import Menu from './menu.jsx'

class Header extends React.Component {

    constructor() {
        super()
        this.handleToggle = this.handleToggle.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.state = {
            menuActive: false
        }
    }

    handleBlur() {
        console.log('blurrrr');
    }

    handleToggle() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        return (
            <header onBlur={this.handleBlur} className='z1 relative clearfix'>
                <div style={{height: '67px'}} className="col-12"></div>
                <div>
                    <div className={`z1 fixed left-0 right-0 top-0 ${this.state.menuActive ? 'bottom-0' :''}`}>
                        <div className="bg-white mr3 ml3 mt3 p2 border border-black line-height-2 cursor-pointer">
                            Anthology Issue A/W 2017
                            <span
                                onClick={this.handleToggle}
                                className='right'>
                                {this.state.menuActive ? 'Close' :'Menu'}
                            </span>
                        </div>
                        {this.state.menuActive && (
                            <div className='pl3'>
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
