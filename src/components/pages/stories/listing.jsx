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
        const PROB = 2
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
							onMouseEnter={this.props.onHandleStoryHover.bind(this, story.title.rendered)}
							onMouseLeave={this.props.onHandleStoryHover.bind(this, '')}
							className='clearfix col col-6 sm-col-2'>
                            <div className="p1">
                                <div className='aspect-2-3 overflow-hidden'>
                                    <Link to={`/stories/${story.slug}`}>
                                        <Image
                                            className='absolute'
                                            src={util.try(() => story.acf.listing_image.url)} />
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
                                        className='absolute'
                                        src={util.try(() => './build/images/background_cross.png')}/>
                                </div>
                            </div>
                        </div>
                    )
                    break;
                case 2:
                    stories.push(
                        <div className='clearfix col col-6 sm-show sm-col-12 p1'>
                            <div className='absolute not-empty'></div>
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
                stories.push(
                    <div className='clearfix col col-12 sm-show this-is-a-clearfix' />
                )
            itemCounter % 2 === 0 &&
                stories.push(
                    <div className='clearfix col col-12 sm-hide this-is-a-clearfix' />
                )
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
