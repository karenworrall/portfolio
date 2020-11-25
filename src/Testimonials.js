import React from 'react';
import TestimonialItem from './TestimonialItem';
import './Testimonials.css';
import data from './Testimonials.json';
import { useInView } from 'react-intersection-observer'

function Testimonials(props)
{

    const [ref, inView] = useInView({
        threshold: window.innerHeight < 800 ? 0 : 0.2,
        triggerOnce: true

    })

    const importAll = r => r.keys().map(r)


    const images = importAll(require.context('./img/featuredIn', false))

    return (
        <div ref={ref} id="testimonials" className={"testimonials" + (inView ? " section-animate" : "")}>
            <h1 className="section-title">Experience</h1>
            <div className="experience">

                <p>
                    I’m a copywriter and content writer with three years’ experience of being published. I’ve written many types of content articles and copywriting pieces on various subjects for multiple companies.
            </p>
                <p>
                    I've been:
            </p>
                <ul>
                    <li>
                        content writing since 2017
                </li>
                    <li>
                        copywriting since 2018
                </li>
                    <li>
                        creating content for my travel site CruiseShipKaren.com since 2018
                </li>
                    <li>
                        an editorial intern for National Geographic Traveller (UK) summer 2018
                </li>
                </ul>
                <p>
                    I’m a diligent researcher who loves learning new things, am tenacious, hard-working and
                    always meet the brief and deadlines.
            </p>
                <p>
                    I speak Spanish, Italian and French (just in case that’s useful).
            </p>
                <h2 style={{ textAlign: "center", margin: "60px auto auto auto" }}>Clients</h2>
                <p>Here’s some of the companies I’ve written for so far:</p>
            </div>

            <div className="clients">

                <div className="logo-wrapper">
                    {images.map(item => <img src={item} alt='maow' key={images.findIndex((element) => element === item)} />)}
                </div>
            </div>

            <div className="endorsments">
                <h2 style={{ textAlign: "center", margin: "60px auto auto auto" }}>Endorsments</h2>
                <p>Here’s a few nice things a few people I’ve written for have said about my work and attitude: </p>
            </div>
            <div className="testimonial-wrapper">

                {data.map(testimonial =>

                    <TestimonialItem
                        key={testimonial.id}
                        id={testimonial.id}
                        quote={testimonial.quote}
                        source={testimonial.source}
                        location={testimonial.location}
                        animate={inView}
                    />
                )}
            </div>

        </div>
    );
}

export default Testimonials;