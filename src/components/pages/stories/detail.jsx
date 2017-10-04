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
            let container
            if (item.position === "Left") {
                float = 'col'
            } else if (item.position === "Right") {
                float = 'col-right'
                container = 'clearfix'
            }

            const credits = util.isArray(item.credits)
            ? (
                <div className="col-12 mt3 mb3 mr-auto ml-auto border bg-white border-box image-credit">
                    {item.credits.map((credit, i) => (
                        <div className={`p2 ${i === item.credits.length - 1 ? '' : 'border-bottom'}`}>
                            {credit.credit}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="col-12 mb3"></div>
            )

            return (
                <div className={container}>
                    <div className={`${float} ${width}`}>
                        <Image src={item.image.url} />
                        <div className="col-12 box-sizing">
                            {credits}
                        </div>
                    </div>
                </div>
            )
        }))

        return (
            <div className="py3">
                <div className="relative col-9">
                    <div className="fixed col-12 top-0 left-0 red title-story-credit skew">
                        <h1 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}} />
                        {util.try(() => (
                            <h2 dangerouslySetInnerHTML={{__html: this.props.post.acf.title_credit}} />
                        ))}
                    </div>
                </div>
                <div className="clearfix container container--story-items pt3">
                    {items}
                </div>
                <div className='clearfix container py4'>
                    <div className="my4">
                        <div className='center col col-6'>
                            <Link to={`/stories/${this.props.previousPost}`}>
                                <div
                                    className='bold'
                                    style={{fontSize: '150px'}}>
                                    Prev
                                </div>
                            </Link>
                        </div>
                        <div className='center col-right col-6'>
                            <Link to={`/stories/${this.props.nextPost}`}>
                                <div
                                    className='bold'
                                    style={{fontSize: '150px'}}>
                                    Next
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryDetail
