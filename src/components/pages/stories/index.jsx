import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Listing from './listing.jsx'
import Detail from './detail.jsx'

import API from '../../api'


// Container for Stories listing page
class ListingContainer extends React.Component {

    render() {
        // The FullRoster iterates over all of the players and creates
        // a link to their profile page.

        if (this.props.stories.length > 0) {
            return (
                <main className='relative height-100 mx4'>
                    <Switch>
                        <Route exact path='/stories' render={(props) => (
                            <Listing stories={this.props.stories}/>
                        )} />
                    <Route path='/stories/:slug' render={(props) => {
                        const story = this.props.stories
                            .find((x) => x.slug === props.match.params.slug)
                        return (
                            <Detail {...story}/>
                        )}
                    }/>
                    </Switch>
                </main>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export default ListingContainer
