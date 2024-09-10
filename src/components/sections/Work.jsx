"use client"

export default function Work() {
    return (
        <section className="work">
            <a className="work__anchor" id="work"></a>
            <h2 className="work__heading">Work experience</h2>
            <div className="work__container">

                <div className="work__card">
                <div className="work__title">
                    <h3>Homeflow</h3> 
                    <div className="work__subtitle">
                        <h4>Junior Frontend Developer</h4><h5>2019 - 24</h5>
                    </div>
                </div>
                <div className="work__para">
                    <p>My role at Homeflow was to participate in weekly sprints and daily standups, completing tickets that varied from bug fixes, investigation and adding new features.</p>
                    <p>I was a part of strategic development projects, one being improving the appearance of our CMS. I also developed a stronger understanding of Git in this role and gained skills in debugging, for example using developer tools in Chrome.</p>
                    <p>I also contributed to theme builds and my most significant achievement was introducing accessibility to the team, which resulted in optimising all our current themes to be more accessible.</p>
                </div>
                <ul className="work__tags"><li>React</li><li>Liquid</li><li>Ruby</li><li>Git</li><li>Tailwind</li><li>SCSS</li><li className="work__tags--stretch"></li></ul>
                </div>
                <div className="work__card">
                <div className="work__title">
                    <h3>Learning People</h3> 
                    <div className="work__subtitle">
                        <h4>Digital Marketing Executive</h4><h5>2018 - 19</h5>
                    </div>
                </div>
                <div className="work__para">
                    <p>At Learning People I was able to utilise both development and design skills. Reporting to the Marketing Manager, I was in charge of email marketing, both external and internal. I created email templates, tested them and liaised with other parties before sending.</p>
                    <p>I collaborated with our Data Analyst to produce landing pages which had high ROI. I would create templates and reuse them for various campaigns.</p>
                    <p>I also worked with our Digital Designer to create assets such as ad banners, icons, booklets and prospectuses using Adobe products.</p>
                </div>
                <ul className="work__tags"><li>JavaScript</li><li>CSS</li><li>Photoshop</li><li>InDesign</li><li>Illustrator</li><li className="work__tags--stretch"></li></ul>
                </div>
                <div className="work__card">
                <div className="work__title">
                    <h3>Ali Kosari Group</h3> 
                    <div className="work__subtitle">
                        <h4>Web Assistant to Creative Director</h4><h5>2017 - 2018</h5>
                    </div>
                </div>
                <div className="work__para">
                    <p>I had a varied role at Ali Kosari Group to support the Creative Director across multiple businesses. This included designing and developing websites, as well as amending current ones.</p>
                    <p>I worked on email marketing campaigns, coming up with the user flow and creating the emails themselves. I was also able to use CSS to customise apps that we created for clients.</p>
                    <p>I also supported with creative assets, using Adobe products to design internal documents, banners, etc.</p>
                    </div>
                <ul className="work__tags"><li>JavaScript</li><li>CSS</li><li>Photoshop</li><li>InDesign</li><li>Illustrator</li><li className="work__tags--stretch"></li></ul>
                </div>
            </div>
        </section>
    )
}