import React from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer'
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function About(props)
{
    const [ref, inView] = useInView({
        threshold: window.innerHeight < 800 ? 0 : 0.2,
        triggerOnce: true

    })

    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     // autoplay: true,
    //     speed: 500,
    //     // autoplaySpeed: 1000,
    //     cssEase: "linear",
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // }

    // const importAll = r => r.keys().map(r)


    // const images = importAll(require.context('./img/featuredIn', false))



    return (

        <div ref={ref} className={"about" + (inView ? " section-animate" : "")} id="about">
            <h1 className="section-title">About</h1>

            <div className="aboutContent">
                <img className="aboutImage" src={require("./img/KarenWorrallAbout.jpg")} alt="Karen Worrall" />
                <div className="aboutWriting">
                    <h2>Copywriter and content writer
                    <span className="fadingEffect" style={{ 'animationDelay': '500ms' }} /></h2>
                    <h3>Thank you for checking out my portfolio.
                    <span className="fadingEffect" style={{ 'animationDelay': '800ms' }} /></h3>
                    <p>My name is Karen. I’m a copywriter, content writer and travel junkie living in Edinburgh,
                    Scotland.
                    <span className="fadingEffect" style={{ 'animationDelay': '1100ms' }} /></p>
                    <p>A few of the brands I’ve worked with since 2017 include: National Geographic Traveller (UK), Holland
                    America Line, ASTA Worldwide Destinations Guide, ABTA, Postcards, and Flight Centre.
                    <span className="fadingEffect" style={{ 'animationDelay': '1400ms' }} /></p>
                    <p>Before discovering the joys of content and copywriting: I spent 15 years working on cruise
                    ships in entertainment and then sales and marketing selling cruises; managed
                    entertainment and sang in Spain; taught English in Italy; and backpacked around the US.
                    <span className="fadingEffect" style={{ 'animationDelay': '1700ms' }} /></p>
                    <p>I created a website about travel by cruise ship giving tips on what to do in ports, and advice
                    on travel and ship life <a href="https://cruiseshipkaren.com" target="_blank" rel="noopener noreferrer">CruiseShipKaren.com</a>
                        <span className="fadingEffect" style={{ 'animationDelay': '2000ms' }} /></p>
                    <p>Words have always been my thing, from speaking them while hosting and managing
                    entertainment teams, singing them as a vocalist, teaching them while English teaching and
                    learning other languages, to writing them to inform, educate, entertain, inspire and
                    persuade.
                    <span className="fadingEffect" style={{ 'animationDelay': '2300ms' }} /></p>
                    <p>I have you covered for any type of content, weaving words to spice up the narrative of your
                    product or story, researching thoroughly and creating the message you need.
                    <span className="fadingEffect" style={{ 'animationDelay': '2600ms' }} /></p>



                </div>



            </div>
            <div className="callToAction">
                <h3>Want to talk about a project?
                        </h3>
                <h3>Let’s chat: <a href="mailto:info@karenworrall.co.uk" target="_blank" rel="noopener noreferrer">info@karenworrall.co.uk</a>
                </h3>
            </div>

            <div className="education">
                <h2>Education</h2>
                <p>I’m a big believer in constant personal development and honing your craft. Here’s a summary of my relevant education so far: </p>
                <ul>
                    <li>
                        2020: Diploma in Copywriting (Distinction) from the College of Media and Publishing (CMP)
                </li>
                    <li>
                        2020: Diploma in Proofreading and Editing (Distinction) from CMP
                </li>
                    <li>
                        2019: Travel Writing course online with Prof. David Farley of Colombia University
                </li>
                    <li>
                        2018: Business of Blogging online course through Nomadic Matt’s Media School
                </li>
                    <li>
                        2015: BA in Applied Music (vocals), University of the Highlands and Islands (UHI), Scotland
                </li>
                    <li>
                        2009: NVQ in Team Leading {"&"} Management, with the CMI, University of Hull, England
                </li>
                    <li>
                        2008: TEFL Diploma – I to I International, in-class and online course with specialist modules
                </li>
                    <li>
                        2000: HND in Music Performance – UHI
                </li>
                </ul>
            </div>

            {/* <h2>As Featured In</h2>
            <div className="carousel">
                <Slider {...sliderSettings}>
                    {images.map(item => <img src={item} alt='maow' />)}
                </Slider>
            </div> */}
        </div>
    )
}

export default About