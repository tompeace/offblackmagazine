import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class StoryDetail extends React.Component {



    handleOnLoad() {
        if (!this.count) {
            this.count = 0
        } else {
            this.count++
        }
        if (this.count === this.props.post.acf.story_item) {

        }
        console.log('loaded');
    }

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
                <div className='col-12 mt3 mb3 mr-auto ml-auto border bg-white border-box image-credit'>
                    {item.credits.map((credit, i) => (
                        <div className={`p2 ${i === item.credits.length - 1 ? '' : 'border-bottom'}`}>
                            {credit.credit}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='col-12 mb3'></div>
            )

            let component
            if (item.type === 'Image') {
                component = (
                    <div>
                        <Image
                            onHasLoaded={this.handleOnLoad}
                            src={item.image.url} />
                        <div className='col-12 box-sizing'>
                            {credits}
                        </div>
                    </div>
                )
            } else if (item.type === 'Text') {
                component = (
                    <div
                        className='mx3'
                        dangerouslySetInnerHTML={{__html: item.text}} />
                )
            }

            return (
                <div className={container}>
                    <div className={`${float} ${width}`}>
                        {component}
                    </div>
                </div>
            )
        }))

        return (
            <div className='py3'>
                <div className='relative col-9'>
                    <div className='fixed col-12 top-0 left-0 red title-story-credit skew'>
                        <h1 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}} />
                        {util.try(() => (
                            <h2 dangerouslySetInnerHTML={{__html: this.props.post.acf.title_credit}} />
                        ))}
                    </div>
                </div>
                <div className='clearfix container container--story-items pt3'>
                    {items}
                </div>
                <div className='clearfix container border mt3'>
                    <div>
                        <div className='col col-6 border-right'>
                            <Link to={`/stories/${this.props.previousPost}`}>
                                <div
                                    className='p2 bold'>
                                    Prev
                                </div>
                            </Link>
                        </div>
                        <div className='col-right col-6'>
                            <Link to={`/stories/${this.props.nextPost}`}>
                                <div
                                    className='p2 bold right'>
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
