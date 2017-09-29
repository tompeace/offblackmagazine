import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
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
                            <Image src={util.try(() => story.acf.listing_image.url)}/>
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div className='relative height-100 mxn4'>
                {stories}
            </div>
        )
    }
}

export default ListingPage
