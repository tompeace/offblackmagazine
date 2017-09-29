import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class StoryDetail extends React.Component {
    render() {

        const items = util.try(() => this.props.acf.story_item.map((item, i) => {
            console.log('items:', item);
            return (

                <div>item</div>
            )
        }))

        return (
            <div className="pb3">
                <h1>{this.props.title.rendered}</h1>
                <h2 dangerouslySetInnerHTML={{__html: this.props.acf.title_credit}} />
                <Image className='col-6' src={this.props.acf.listing_image.sizes['twentyseventeen-featured-image']} />
                <div className='h1 pt3'>
                    <Link to='/stories'>Back</Link>
                </div>
            </div>
        )
    }
}

export default StoryDetail
