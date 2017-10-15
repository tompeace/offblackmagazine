import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../partials/image.jsx'
import util from '../../utilities'

class ListingPage extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            hoveredStory: null
        }
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const PROB = 1.5
        const getRandomInt = () => Math.floor(Math.random() * PROB);

        let story
        let stories = []
        let storyCounter = 0
        let itemCounter = 1

        while (storyCounter < this.props.stories.length) {
            switch (getRandomInt()) {
                case 0:
                    story = this.props.stories[storyCounter]
                    stories.push(
                        <div
							className='clearfix col col-6 sm-col-2'>
                            <div className="p1">
                                <div className='aspect-2-3 overflow-hidden cursor-pointer'>
                                    <Link to={`/stories/${story.slug}`}>
                                        <div
                                            className='p2 absolute border hover-card'
                                            dangerouslySetInnerHTML={{__html: story.title.rendered}} />
                                        <div className='hover-fade opacity-1'>
                                            <Image
                                                className='col-12 absolute'
                                                src={util.try(() => story.acf.listing_image.url)} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    storyCounter++
                    break;
                case 1:
                    stories.push(
                        <div className='clearfix col col-6 sm-col-2'>
                            <div className="p1">
                                <div className='aspect-2-3 overflow-hidden border'>
                                    <Image
                                        className='col-12 absolute'
                                        src={util.try(() => './build/images/background_cross.png')}/>
                                </div>
                            </div>
                        </div>
                    )
                    break;
                default:
                    stories.push(
                        <div className='clearfix col col-6 sm-col-12 p1'>
                            <div className='absolute not-empty'></div>
                        </div>
                    )
            }

			itemCounter % 6 === 0 &&
                stories.push(<div className='clearfix col col-12 sm-show' />)
            itemCounter % 2 === 0 &&
                stories.push(<div className='clearfix col col-12 sm-hide' />)

            itemCounter++
        }
        return (
            <div className='relative height-100 mx4 px1 py1'>
                {stories}
            </div>
        )
    }
}

export default ListingPage
