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
        const items = this.props.stories.length * PROB - 1

        const getRandom = () => Math.floor(Math.random() * (PROB - 0));

        let story
        let stories = []
        let storyCounter = 0

        for (var i = 0; i < items; i++) {
            const randomInt = getRandom()
            switch (randomInt) {
                case 0:
                    story = this.props.stories[storyCounter]
                    console.log(story);
                    stories[i] = (
                        <div className='clearfix col col-2 aspect-1-1'>
                            <div className='p3'>
                                <Link to={`/stories/${story.slug}`}>
                                    <Image
                                        className=''
                                        src={util.try(() => story.acf.listing_image.url)}/>
                                </Link>
                            </div>
                        </div>
                    )
                    storyCounter++
                    break;
                case 1:
                    stories[i] = (
                        <div className='clearfix col col-2 aspect-1-1'>
                            <div className='p3'>
                                <Image
                                    className='border'
                                    src={util.try(() => './build/images/background_cross.png')}/>
                            </div>
                        </div>
                    )
                    break;
                case 2:
                    stories[i] = (
                        <div className='clearfix col col-2 aspect-1-1'></div>
                    )
                    break;
                default:
                    console.log('randomInt not handled:', randomInt);
                    stories[i] = (
                        <div className='clearfix col col-2 aspect-1-1 not-empty'></div>
                    )
            }
        }
        return (
            <div className='relative height-100'>
                {stories}
            </div>
        )
    }
}

export default ListingPage
