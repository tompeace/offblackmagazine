import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Listing from './listing.jsx'
import Detail from './detail.jsx'


// Container for Stories listing page
class ListingContainer extends React.Component {

    render() {
        // The FullRoster iterates over all of the players and creates
        // a link to their profile page.

        const ListingComponent = (props) => (<Listing stories={this.props.stories}/>)
        const DetailComponent = (props) => {
            let previousPost
            let nextPost
            const post = this.props.stories.find((x) => x.slug === props.match.params.slug)
            const index = this.props.stories.findIndex((x) => x.id === post.id)

            if (index === this.props.stories.length - 1) {
                nextPost = this.props.stories[0].slug
                previousPost = this.props.stories[index - 1].slug
            } else if (index === 0) {
                nextPost = this.props.stories[1].slug
                previousPost = this.props.stories[this.props.stories.length - 1].slug
            } else {
                nextPost = this.props.stories[index + 1].slug
                previousPost = this.props.stories[index - 1].slug
            }

            const story = {
                post,
                previousPost,
                nextPost
            }

            return (<Detail {...story}/>)
        }

        if (this.props.stories.length > 0) {
            return (
                <main className='relative height-100'>
                    <Switch>
                        <Route exact path='/stories' render={ListingComponent} />
                        <Route path='/stories/:slug' render={DetailComponent}/>
                    </Switch>
                </main>
            )
        } else {
            return (
                <div className='center col-12 v-centre'>
                    Loading...
                </div>
            )
        }
    }
}

export default ListingContainer
