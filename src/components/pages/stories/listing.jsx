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
        const getRandom = () => Math.floor(Math.random() * PROB);

        let story
        let stories = []
        let storyCounter = 0

        while (storyCounter < this.props.stories.length) {
            const randomInt = getRandom()
            switch (randomInt) {
                case 0:
                    story = this.props.stories[storyCounter]
                    stories.push(
                        <div className='clearfix col col-4 sm-col-2 '>
                            <div className='p3 aspect-1-1'>
                                <Link to={`/stories/${story.slug}`}>
                                    <Image
                                        className='absolute'
                                        src={util.try(() => story.acf.listing_image.url)}/>
                                </Link>
                            </div>
                        </div>
                    )
                    storyCounter++
                    break;
                case 1:
                    stories.push(
                        <div className='clearfix col col-4 sm-col-2'>
                            <div className='p3 aspect-1-1 overflow-hidden'>
                                <Image
                                    className='border'
                                    src={util.try(() => './build/images/background_cross.png')}/>
                            </div>
                        </div>
                    )
                    break;
                case 2:
                    stories.push(
                        <div className='clearfix col col-4 sm-col-2 aspect-1-1'></div>
                    )
                    break;
                default:
                    stories.push(
                        <div className='clearfix col col-4 sm-col-2 aspect-1-1 not-empty'></div>
                    )
            }
        }

        return (
            <div className='relative height-100 px4 mx2'>
                {stories}
            </div>
        )
    }
}

export default ListingPage
