import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className='clearfix container relative'>
                <div
                    className='col-12 my3 md-m0 md-mt3 p2'
                    dangerouslySetInnerHTML={{__html: '&nbsp;'}}/>
                <div className='grid-about sm-show container border fixed top-0 bottom-0 left-0 right-0'>
                    <div className='col col-6 height-100 border-right pointer-events'></div>
                    <div className='col col-3 height-100 border-right pointer-events'></div>
                </div>
                <div className='col col-12 sm-col-6'>
                    <div className='p2 border-bottom border-top sm-border-0 sm-border-bottom break-line break-word'>
                        <div
                            className='limit-line-length'
                            dangerouslySetInnerHTML={{__html:
                            `OFF BLACK MAGAZINE is a biannual beauty, fashion, arts and culture magazine based in London.

                            Here to provide a platform for a new generation of stylists, photographers, writers, artists and creatives to produce original and exciting work.

                            We are drawn to the experimental, strong, equal and fun. We promote freedom of expression for all.

                            We'd like to take this opportunity to thank everyone who's contributed. We hope that you will enjoy this issue as much as we have enjoyed creating it.`
                        }} />
                    </div>
                    <div
                        className="p2 border-bottom break-line break-word"
                        dangerouslySetInnerHTML={{__html:
                            `GENERAL ENQUIRIES <a href="mailto:info@offblackmagazine.com">info@offblackmagazine.com</a>
                        SUBMISSIONS <a href="mailto:submission@offblackmagazine.com">submission@offblackmagazine.com</a>`
                        }} />
                </div>
                <div className="col col-12 sm-col-3 border-bottom md-border-0">
                    <div
                        className="p2 break-line break-word"
                        dangerouslySetInnerHTML={{__html:
                            `EDITOR–IN–CHIEF
                            Sarah Jo Palmer
                            <a href="mailto:sarah@offblackmagazine.com">sarah@offblackmagazine.com</a>

                            EDITOR–IN–CHIEF
                            Claire Grech
                            <a href="mailto:claire@offblackmagazine.com">claire@offblackmagazine.com</a>

                            CREATIVE DIRECTOR
                            Johanna Bonnevier
                            <a href="mailto:johanna.b@offblackmagazine.com">johanna.b@offblackmagazine.com</a>

                            ART DIRECTOR
                            Peter Ainsworth
                            <a href="mailto:peter@offblackmagazine.com">peter@offblackmagazine.com</a>

                            IMAGE EDITOR
                            Johanna Nyholm
                            <a href="mailto:johanna.n@offblackmagazine.com">johanna.n@offblackmagazine.com</a>`
                        }} />
                </div>
                <div className="col col-12 sm-col-3">
                    <div className="p2 break-line break-word"
                        dangerouslySetInnerHTML={{__html:
                            `BEAUTY EDITOR
                            Linda Andersson
                            <a href="mailto:linda@offblackmagazine.com">linda@offblackmagazine.com</a>

                            FASHION EDITOR
                            Grace Joel
                            <a href="mailto:grace@offblackmagazine.com">grace@offblackmagazine.com</a>

                            FEATURES EDITOR
                            Victoria Spratt

                            DESIGN AND PRODUCTION
                            Bonnevier Ainsworth

                            DIGITAL DESIGN
                            <a href="http://quentinvilleret.com">Quentin Villeret</a>

                            DIGITAL DEVELOPMENT
                            <a href="http://tompeace.com">Thomas Peace</a>`
                        }} />
                </div>
            </div>
        )
    }
}

export default About
