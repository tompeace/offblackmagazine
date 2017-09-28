import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoryListing from './story-listing.jsx'
import StoryDetail from './story-detail.jsx'

import API from '../../api'


// Container for Stories listing page
class ListingContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        fetch('http://offblackmagazine.com/dev/wp-json/wp/v2/posts')
            .then((data) => data.json())
            .then((posts) => {
                this.setState({stories: posts}, () =>
                    console.log(this.state.posts))
            })
    }

    render() {
        // The FullRoster iterates over all of the players and creates
        // a link to their profile page.
        const StoryListing = () => (
          <div>
            <ul>
              {
                API.all().map(p => (
                  <li key={p.number}>
                    <Link to={`/roster/${p.number}`}>{p.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )
        return (
            <main className='relative height-100 overflow-hidden'>
                <Switch>
                  <Route exact path='/stories' component={StoryListing}/>
                  <Route path='/stories/:number' component={StoryDetail}/>
                </Switch>
            </main>
        )
    }
}

export default ListingContainer
