"use client"

import ExportIcon from "../icons/ExportIcon"

export default function Portfolio() {
    return (
        <section className="portfolio">
            <a className="portfolio__anchor" id="portfolio"></a>
            <h2 className="portfolio__heading">My portfolio</h2>
            <div className="portfolio__container">
            <div className="portfolio__card">
                <div className="portfolio__preview">
                    <img src='/images/AliKosariGroup.png' />
                    <div className="portfolio__title-holder"><h3>Ali <br />Kosari <br />Group</h3></div>
                </div>
                <div className="portfolio__type">Design, Development</div>
                <div className="portfolio__flex-container">
                <div className="portfolio__para">This website was built using JavaScript and CSS in 2017, for the purpose of displaying the Director's portfolio of businesses. I both designed and coded this website.</div>
                <div className="portfolio__flex">
                <span className="portfolio__link"><a href="">Preview <ExportIcon /></a></span>
                </div>
                </div>
            </div>
            <div className="portfolio__card">
                <div className="portfolio__preview">
                    <img src='/images/UKStudyGroup.png' />
                    <div className="portfolio__title-holder"><h3>UK <br />Study <br />Group</h3></div>
                </div>
                <div className="portfolio__type">Design, Development</div>
                <div className="portfolio__flex-container">
                <div className="portfolio__para">This website was built using JavaScript and CSS in 2017, for the purpose of displaying the Director's portfolio of businesses involving UKStudyGroup. I both designed and coded this website.</div>
                <div className="portfolio__flex">
                <span className="portfolio__link"><a href="">Preview <ExportIcon /></a></span>
                </div>
                </div>
            </div>
            <div className="portfolio__card">
                <div className="portfolio__preview">
                    <img src='/images/Portfolio.png' />
                    <div className="portfolio__title-holder"><h3>Portfolio<br />Site</h3></div>
                </div>
                <div className="portfolio__type">Design, Development</div>
                <div className="portfolio__para">I built my portfolio website in 2022 - 23, with the purpose of putting my React and Tailwind skills together in a simple but concise design.</div>
                <div className="portfolio__flex">
                <span className="portfolio__link"><a href="https://github.com/kayleighjane/portfolio">Github <ExportIcon /></a></span>
                <span className="portfolio__link"><a href="https://kayleighregan.netlify.app/">Preview <ExportIcon /></a></span>
                </div>
            </div>
            <div className="portfolio__card">
                <div className="portfolio__preview">
                    <img src='' />
                    <div className="portfolio__title-holder"><h3>Movie<br />Search</h3></div>
                </div>
                <div className="portfolio__type">Development</div>
                <div className="portfolio__para">This is a React application created as part of a training project with Paul Blackwell, where through paired programming we covered the basics of React and best practices of it using the IMDBAPI.</div>
                <div className="portfolio__flex">
                <span className="portfolio__link"><a href="https://github.com/kayleighjane/movie-search">Github <ExportIcon /></a></span>
                
                </div>
            </div>
            </div>
        </section>
    )
}