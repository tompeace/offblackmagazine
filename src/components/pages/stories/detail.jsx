import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class StoryDetail extends React.Component {

    render() {

        const renderMixed = (item, i) => {
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

            const itemCredits = util.isArray(item.credits)
            ? (
                <div className='col-12 mt3 mb3 mr-auto ml-auto border bg-white border-box image-credit'>
                    {item.credits.map((credit, i) => (
                        <div
                            className={`p2 ${i === item.credits.length - 1 ? '' : 'border-bottom'}`}
                            dangerouslySetInnerHTML={{__html: credit.credit}} />
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
                            className='col-12'
                            src={item.image.url} />
                        <div className='col-12 box-sizing'>
                            {itemCredits}
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
        }

        const renderText = (item, i) => {
            let itemComponents = []
            const borderClass = i % 2 === 0 ? 'md-border-left md-border-right' : 'md-border-right'
            itemComponents.push(
                <div className={`col col-12 md-col-6 ${borderClass} md-border-top md-border-bottom mtn1px bg-white mb3 text-story`}>
                    <div
                        className='mx3'
                        dangerouslySetInnerHTML={{__html: item.text}} />
                </div>
            )
            return itemComponents
        }

        const isTextStory = this.props.post.acf.story_item
            .reduce((res, obj) => res = obj.type === 'Image' ? false : true, true)

        const renderItems = isTextStory ? renderText : renderMixed;
        const items = util.try(() => this.props.post.acf.story_item.map(renderItems));

        const storyCredits = util.isArray(this.props.post.acf.story_credits)
        ? (
            <div className='col-12 mb3 mr-auto ml-auto border bg-white border-box image-credit'>
                {this.props.post.acf.story_credits.map((item, i) => (
                    <div
                        className={`p2 ${i === this.props.post.acf.story_credits.length - 1 ? '' : 'border-bottom'}`}
                        dangerouslySetInnerHTML={{__html: item.credit}} />
                ))}
            </div>
        ) : (
            <div className='col-12 mb3'></div>
        )

        return (
            <div
                ref='detailPage'
                className='py3'>
                <div className='relative col-9'>
                    <div className='fixed col-12 top-0 left-0 red title-story-credit'>
                        <h1 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}} />
                        {util.try(() => (
                            <h2 dangerouslySetInnerHTML={{__html: this.props.post.acf.title_credit}} />
                        ))}
                    </div>
                </div>
                <div className='clearfix container container--story-items pt3'>
                    {items}
                </div>
                <div className="clearfix container">
                    {storyCredits}
                </div>
                <div className='clearfix container mt3 pl3 pr3'>
                    <div>
                        <Link className='link-prev' to={`/stories/${this.props.previousPost}`}>
                            <div className='col col-6 border'>
                                <div
                                    className='p2 skew'>
                                    Prev
                                </div>
                            </div>
                        </Link>
                        <Link className='link-next' to={`/stories/${this.props.nextPost}`}>
                            <div className='col-right col-6 border'>
                                <div
                                    className='p2 right skew'>
                                    Next
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryDetail
