import React from 'react'

export default class Menu extends React.Component {

    render() {
        return (
            <div className='max-width-100 max-height-100 bg-white'>
                <div>
                    <div className='p2 border-bottom border-black'>Issues</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/the-future-is-theirs/">
                            the-future-is-theirs
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/man-made/">
                            man-made
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/issues/raw/">
                            raw
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive-cult/">
                            archive-cult
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive/">
                            archive
                        </a>
                    </div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/archive/the-body">
                            the-body
                        </a>
                    </div>
                </div>
                <div>
                    <div className='p2 border-bottom border-top border-black'>About</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/about/">About</a>
                    </div>
                </div>
                <div>
                    <div className='p2 border-bottom border-top border-black'>Contributors</div>
                    <div className='p2'>
                        <a href="http://offblackmagazine.com/contributors/">Contributors</a>
                    </div>
                </div>
            </div>
        )
    }
}
