import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Home, Stories, About} from './pages'
import Header from './partials/header.jsx'
import util from './utilities'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        fetch('http://offblackmagazine.com/dev/wp-json/wp/v2/posts/?filter[posts_per_page]=100')
            .then((data) => data.json())
            .then((posts) => {
                this.setState({stories: posts}, () =>
                    console.log('stories', this.state.stories))
            })
    }

    render() {
        return (
            <main className='height-100'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/stories' render={(props) => (
                        <Stories stories={this.state.stories}/>
                    )} />
                    <Route path='/about' component={About}/>
                </Switch>
                <div style={{height: '67px'}} className="col-12"></div>
            </main>
        )
    }
}

const app = ReactDOM.render(
    (<HashRouter>
        <Main />
    </HashRouter>),
    document.getElementById('root')
)

export default app
