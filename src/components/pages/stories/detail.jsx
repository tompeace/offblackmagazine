import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'

class StoryDetail extends React.Component {
    render() {
        console.log('story detail props', this.props);
        return (
            <div className="mx3">
                <h1>{this.props.title.rendered}</h1>
                <h2 dangerouslySetInnerHTML={{__html: this.props.acf.title_credit}} />
                <img className='col-6' src={this.props.acf.listing_image.url}/>
                <div className='h1'>
                    <Link to='/stories'>Back</Link>
                </div>
            </div>
        )
    }
}

export default StoryDetail
