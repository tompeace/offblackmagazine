import Link from 'react-router-dom'
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
            <header className='z1 fixed clearfix top-0 right-0 left-0'>
                {/*
                  <div style={{height: '67px'}} className="col-12"></div>
                */}
                <div>
                    <div className={`z1 left-0 right-0 top-0 ${this.state.menuActive ? 'bottom-0' :''}`}>
                        <div className="bg-white mr3 ml3 mt3 p2 border border-black line-height-2">
                            Anthology Issue A/W 2017
                            <span
                                onClick={this.handleToggle}
                                className="right skew-hover">Menu</span>
                        </div>
                        {this.state.menuActive && (
                            <Menu />
                        )}
                    </div>
                    {/*
                      <div className='marquee z1 bg-white mr3 ml3 mb3 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
                          <div className='marquee'>
                              <span>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</span>
                          </div>
                      </div>
                    */}
                </div>

            </header>
        )
    }
}

export default Header
