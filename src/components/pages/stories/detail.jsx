import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class StoryDetail extends React.Component {
    render() {

        const items = util.try(() => this.props.post.acf.story_item.map((item, i) => {
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
                <div className=''>
                    <div className={`${float} ${width}`}>
                        <Image src={item.image.url} />
                        <div className="col-12 box-sizing">
                            <div className="col-12 mt3 mb3 mr-auto ml-auto p2 border bold bg-white border-box image-credit">
                              {item.image.filename}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }))

        // TODO: Remove Back link and add prev and next story links
        // TODO: Make Title Story Credit in HelveticaNeue-CondensedBold
        return (
            <div className="py3">
                <div className="relative col-9">
                    <div className="fixed col-12 top-0 left-0 red title-story-credit skew">
                        <h1>{this.props.post.title.rendered}</h1>
                        <h2 dangerouslySetInnerHTML={{
                            __html: this.props.post.acf.title_credit
                        }} />
                    </div>
                </div>
                <div className="clearfix container container--story-items pt3">
                    {items}
                </div>
                <div className='container py4 fixed bottom-0 left-0 right-0'>
                    <Link className='left' to={`/stories/${this.props.previousPost}`}>
                        <span style={{fontSize: '50px'}}>
                            {'⟵ Back'}
                        </span>
                    </Link>
                    <Link className='right' to={`/stories/${this.props.nextPost}`}>
                        <span style={{fontSize: '50px'}}>
                            {'Next ⟶'}
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StoryDetail
