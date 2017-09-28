// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
//
// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )
//
// render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));


// For this demo, we are using the UMD build of react-router-dom
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Home, Stories, Events} from './pages/stories/index.jsx'
import Header from './partials/header.jsx'





// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/stories' component={Stories}/>
      <Route path='/events' component={Events}/>
    </Switch>
  </main>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const app = ReactDOM.render(
    (<HashRouter>
        <App />
    </HashRouter>),
    document.getElementById('root')
)

export default app
