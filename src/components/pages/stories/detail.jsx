import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class StoryDetail extends React.Component {
    render() {

        const items = util.try(() => this.props.acf.story_item.map((item, i) => {

            let width
            if (item.width === "Full Width") {
                width = "col-12"
            } else if (item.width === "Half Width") {
                width = "col-6"
            }

            let float
            if (item.position === "Left") {
                float = 'col'
            } else if (item.position === "Right") {
                float = 'col-right'
            }

            return (
                <div className={`${i !== 0 ? 'pt3' : ''} relative clearfix`}>
                    <div className={`${float} ${width}`}>
                        <Image src={item.image.url} />
                        <div className="absolute col-7 bottom-0 right-0 mb3 mr3 p2 border bold bg-white">
                            <div>{item.image.filename}</div>
                        </div>
                    </div>
                </div>
            )
        }))

        return (
            <div className="py3">
                <div className="relative col-9">
                    <div className="aspect-1-1">
                    <Image src={this.props.acf.listing_image.sizes['twentyseventeen-featured-image']} />
                    </div>
                    <div className="absolute col-7 top-0 left-0 mt3 ml3 p2 red border border-red">
                        <h1>{this.props.title.rendered}</h1>
                        <h2 dangerouslySetInnerHTML={{__html: this.props.acf.title_credit}} />
                    </div>
                </div>
                <div className="container pt3">
                    {items}
                </div>
                <div className='h1 pt3'>
                    <Link to='/stories'>Back</Link>
                </div>
            </div>
        )
    }
}

export default StoryDetail
