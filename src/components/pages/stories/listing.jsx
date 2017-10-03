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
        let itemCounter = 0

        while (storyCounter < this.props.stories.length) {
            switch (getRandomInt()) {
                case 0:
                    story = this.props.stories[storyCounter]
                    stories.push(
                        <div className='clearfix col col-2'>
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
                        <div className='clearfix col col-2'>
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
                        <div className='clearfix col col-2 p1'>
                            <div className='absolute not-empty'></div>
                        </div>
                    )
                    break;
                default:
                    stories.push(
                        <div className='clearfix col col-2 p1'>
                            <div className='absolute not-empty'></div>
                        </div>
                    )
            }

            if (itemCounter % 5 === 0) {
                stories.push(
                    <div className='clearfix col col-2'>
                        <div className='absolute not-empty'></div>
                    </div>
                )
            }
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
