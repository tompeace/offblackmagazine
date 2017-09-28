import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
    <div>
    <div className='z1 bg-white mr3 ml3 mt3 p2 fixed top-0 left-0 right-0 border border-black line-height-2'>
       Anthology Issue A/W 2017
    </div>
    <div className='marquee z1 bg-white mr3 ml3 mb3 py2 fixed bottom-0 left-0 right-0 border border-black overflow-hidden line-height-2'>
        <div className='marquee'>
            <span>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</span>
        </div>
    </div>
    </div>
  </header>
)

export default Header
