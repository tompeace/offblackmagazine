import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className='clearfix container relative'>
                <div
                    className='col-12 my3 md-m0 md-mt3 p2'
                    dangerouslySetInnerHTML={{__html: '&nbsp;'}}/>
                <div className="md-show container border fixed top-0 bottom-0 left-0 right-0">
                    <div className="col col-6 height-100 border-right pointer-events"></div>
                    <div className="col col-3 height-100 border-right pointer-events"></div>
                </div>
                <div className='col col-12 md-col-6'>
                    <div className="p2 border-bottom border-top md-border-0 md-border-bottom break-line break-word">
                        <div className="limit-line-length">
                            {`OFF BLACK MAGAZINE is a biannual beauty, fashion, arts and culture magazine based in London.

                            Here to provide a platform for a new generation of stylists, photographers, writers, artists and creatives to produce original and exciting work.

                            We are drawn to the experimental, strong, equal and fun. We promote freedom of expression for all.

                            We'd like to take this opportunity to thank everyone who's contributed. We hope that you will enjoy this issue as much as we have enjoyed creating it.`}
                        </div>
                    </div>
                    <div className="p2 border-bottom break-line break-word">
                        {`GENERAL ENQUIRIES info@offblackmagazine.com

                        SUBMISSIONS submission@offblackmagazine.com`}
                    </div>
                    <div className="p2 break-line break-word">
                        {`Off Black Magazine, Unit 8,
                        203-213 Mare Street, London E8 3EQ, UK`}
                    </div>
                </div>
                <div className="col col-12 md-col-3 border-bottom md-border-0">
                    <div className="p2 break-line break-word">
                        {`EDITOR–IN–CHIEF
                        Sarah Jo Palmer
                        sarah@offblackmagazine.com

                        CREATIVE DIRECTOR
                        Johanna Bonnevier
                        johanna.b@offblackmagazine.com

                        IMAGE EDITOR
                        Johanna Nyholm
                        johanna.n@offblackmagazine.com

                        FASHION EDITOR
                        Grace Joel
                        grace@offblackmagazine.com

                        DESIGN AND PRODUCTION
                        Bonnevier Ainsworth

                        DIGITAL DESIGN
                        Quentin Villeret

                        DIGITAL DEVELOPMENT
                        braw`}
                    </div>
                </div>
                <div className="col col-12 md-col-3">
                    <div className="p2 break-line break-word">
                        {`EDITOR–IN–CHIEF
                        Claire Grech
                        claire@offblackmagazine.com

                        ART DIRECTOR
                        Peter Ainsworth
                        peter@offblackmagazine.com

                        BEAUTY EDITOR
                        Linda Andersson
                        linda@offblackmagazine.com

                        FEATURES EDITOR
                        Victoria Spratt

                        DIGITAL DESIGN
                        Quentin Villeret

                        DIGITAL DEVELOPMENT
                        Thomas Peace`}
                    </div>
                </div>
            </div>
        )
    }
}

export default About
