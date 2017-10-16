import React from 'react'

class Contributors extends React.Component {
    render() {
        return (
            <div className='clearfix container relative'>
                <div
                    className='col-12 my3 md-m0 md-mt3 p2'
                    dangerouslySetInnerHTML={{__html: '&nbsp;'}}/>
                <div className='grid-about sm-show container border fixed top-0 bottom-0 left-0 right-0'>
                    <div className='col col-6 height-100 border-right pointer-events'></div>
                </div>
                <div className='col col-12 sm-col-6'>
                    <div className='p2 border-top border-bottom sm-border-0 sm-border-bottom break-line'>
                        PHOTOGRAPHERS
                    </div>
                    <div className='p2 border-bottom break-line'>
                        <div className='limit-line-length'>
                            {`Adam Goodison, Amanda Camenisch, Amanda Johansson, Amie Milne, Arved Colvin Smith, Baud Postma, Benjamin Tietge, Billy Ballard, Carly Scott, Christian Högstedt, Cochi Esse, Daisy Walker, Damien Fry, Daniel Thomas Smith, Daniele Rossi, Dasha Kova, David Edwards, Davide Cossu, Eddie Wrey, Edward Horder, Felicity Ingram, Federico Pestilli, Francesco Barion, Hadar Pitchon, Harriet MacSween, Harry Carr, Hedvig Jening, Hill and Aubrey, Iain Anderson, India Grove, James Naylor, Jan Lehner, Jason Pietra, Jeff Boudreau, Jesse Laitinen, Jessica Gwyneth, Joseph Thien Dang, Karoliina Bärlund, Laurence Stark, Lauretta Suter, Louie Banks, Louise Damgaard, Maarten Alexander, Marc Hibbert, Markus Rico, Mattias Björklund, Max Vigato, Maya Skelton, Michelle Beatty, Mirella Malaguti, Mitchell McLennan, Ned Mulvihill, Nick Fitzpatrick, Niko Mitrunen, Norman Wilcox, Olivia Rose, Oskar Gyllenswärd, Pablo Freda, Patricia Ruiz del Portal, Peter Fingleton, Phil Dunlop, Quba Tuakli, Rebecca Naen, Sam Rock, Sam Copeland, Sara Merz, Sofie Middernacht, Sohrab Vahdat, Takanori Okuwaki, Ted Park, Thurstan Redding, Thomas Brown, Tom Moran, Vicki King, Yuji Fukuhara`}
                        </div>
                    </div>
                    <div className='p2 border-bottom break-line'>
                        DIGITAL
                    </div>
                    <div className='p2 border-bottom break-line'>
                        <div className='limit-line-length'>
                        {`James Curtis (Digital design and development of issues 'The Body', 'Double', and 'Cult'), Braw.io (Digital development of issue 'The Future is: Theirs', Digital Design and development of issues 'Man Made' and 'Raw').`}
                        </div>
                    </div>
                </div>
                <div className='col col-12 sm-col-6'>
                    <div className='p2 border-bottom break-line'>
                        STYLISTS
                    </div>
                    <div className='p2 break-line border-bottom'>
                        <div className='limit-line-length'>
                            {`Adele Cany, Alex Robertson-Dunlop, Alice Burnfield, Aryen Lappin, Atip W, Ayano Santanda, Bridie Gilbert, Caitlin Moon Curran, Candice Bailey, Chiori Takamatsu, Coline Bach, Courtney Raniszewski, Desi Lazarova, Eliza Conlon, Esperanza De La Fuente, Francesca Pinna, Genevieve Garner, Ginger Clark, Hayley Caine, Jemma Aickin, Josef Forselius, Justin Hamilton, Liesa Stecher, Lorenzo Posocco, Luci Ellis, Lucia Silva, Lune Kuipers, Magdalena Bryk, Manuel Estevez, Maria Barsoum, Micaela Erlanger, Michael Darlington, My name is Kabir, Nicoletta Cianci, Oriana Tundo, Pasa- dena Hellqvist, Pauline Collet, Poppie Clinch, Rhona Ezuma, Samuel Gallagher, Sam Ranger, Sarah Starkey, Simone Konu, Sophie Warburton, Steph Wilson, Sylvester Yiu, Tara Greville, Tawfiq Khoury, Toncheva O’Rorke, Vanissa Antonious, Victoria Steiner`}
                        </div>
                    </div>
                    <div className='p2 border-bottom break-line'>
                        WRITERS
                    </div>
                    <div className='p2 break-line border-bottom'>
                        <div className='limit-line-length'>
                            {`Codie Young, Eleanor Taylor-Davis, Erik Neish, Isabel Bush, Jack Andrew Lantern, Louise O’Neill, Jenny Pashkova, Nazanin Mondschein, Robert Sharp, Thomas Silver- man, Victoria Spratt`}
                        </div>
                    </div>
                    <div className='p2 border-bottom break-line'>
                        ART
                    </div>
                    <div className='p2 break-line border-bottom'>
                        <div className='limit-line-length'>
                            {`Anna Balecho, Aviya Wyse, Bar Alon, Caleb Hane, Dafy Hagai, Dana Boulos, Daniel K Sparkes, Doris Day, Ed Forniles, Falodysci, Graeme Swinton, Ingri Haraldsen, Jesse Draxler, Josh Lowe, Leah Schrager, Lightning & Kingleyface , Lilia Li-Mi-Yan, Lori Nix, Mayan Toldedano, Maya Fuhr, Monika Mogi, Richard Prince, Rico Scagliola & Michael Meier, Sara Rainoldi, Simon Fowler, Stand up for Paradise, Tyler Spangler, Unga (Broken Fingaz Crew), Wyse & Gabriely, Zen Sevastanova`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contributors
