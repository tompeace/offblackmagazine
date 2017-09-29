import React from 'react'
import { Link } from 'react-router-dom'
import util from '../../utilities'

class ListingPage extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    render() {
        let stories = []
        const story = this.props.stories[0]
        for (var i = 0; i < 30; i++) {
            stories[i] = (
                <div className='clearfix col col-2 aspect-1-1'>
                    <div className='p3'>
                        <Link to={`/stories/${story.slug}`}>
                            <img className='col-12 block' src={util.try(() => story.acf.listing_image.url)} alt=""/>
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div className='relative height-100 mx3'>

                {stories}
            </div>
        )
    }
}

export default ListingPage
