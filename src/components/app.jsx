import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Home, Stories, About, Contributors } from './pages'
import Header from './partials/header.jsx'
import ScrollToTop from './utilities/ScrollToTop.jsx'
import util from './utilities'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            stories: [],
            hoveredStory: ''
        }
    }

    componentDidMount() {
        fetch('http://offblackmagazine.com/dev/wp-json/wp/v2/posts?per_page=100')
            .then((data) => data.json())
            .then((stories) => this.setState({stories}))
    }

	handleStoryHover(hoveredStory) {
		this.setState({hoveredStory})
	}

    render() {
        // let currentPage
        // switch (this.state.location) {
        //     case '':
        //
        //         break;
        //     default:
        //
        // }

        const StoriesComponent = (props) => (
			<Stories
				onHandleStoryHover={this.handleStoryHover}
				stories={this.state.stories}/>
        )

        return (
            <main className='height-100'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/stories' render={StoriesComponent} />
                    <Route path='/about' component={About} />
                    <Route path='/contributors' component={Contributors} />
                </Switch>
            </main>
        )
    }
}

const app = ReactDOM.render(
    (<HashRouter>
        <ScrollToTop>
            <Main />
        </ScrollToTop>
    </HashRouter>),
    document.getElementById('root')
)

export default app
