import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Home, Stories, About} from './pages'
import Header from './partials/header.jsx'

class Main extends React.Component {

    render() {
        return (
            <main>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/stories' component={Stories}/>
                    <Route path='/about' component={About}/>
                </Switch>
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
