import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css'
import ServiceData from './Services.json'
import { Spring } from 'react-spring/renderprops';
import { animated } from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Faqs from './Faqs.json';


function Services(props)
{
    const [activeFaq, setActiveFaq] = useState("");

    const [ref, inView] = useInView({
        threshold: window.innerHeight < 800 ? 0 : 0.2,
        triggerOnce: true

    })

    // useEffect(() =>
    // {

    // }, [activeFaq])

    return (

        <div ref={ref} id="services" className={"services" + (inView ? " section-animate" : "")}>
            <h1 className="section-title">Services</h1>
            <div className="service-wrapper">
                {ServiceData.map(item =>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: inView ? 1 : 0 }}
                        delay={(50 * item.id + 300)}
                        animate={inView}
                        key={item.id}
                    >
                        {optns =>
                            <animated.div className="service-item" key={item.id} style={optns}>
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.info }}></p>
                            </animated.div>
                        }
                    </Spring>

                )}
            </div>

            <div className="service-contact">
                <h3>To chat about a project involving one or more of these, please get in touch:</h3>
                <div className="fakeButton">
                    <AnchorLink href="#contact">Contact</AnchorLink>
                </div>

            </div>

            <div className="faqs">
                <h2 style={{ textAlign: "center", margin: "60px auto auto auto" }}>FAQs</h2>
                {Faqs.map(item =>
                    <div className="faq" key={item.id}>
                        <div className="faq-question" onClick={() => activeFaq === item.id ? setActiveFaq("") : setActiveFaq(item.id)}>
                            <h3>{(activeFaq === item.id ? "- " : "+ ") + item.title}</h3>
                        </div>
                        <div className="faq-answer" style={{ display: activeFaq === item.id ? "block" : "none" }}>
                            {item.answers.map(answer => answer[0] === "*" ? <h4 key={answer}>{answer.substring(1)}</h4> : <p key={answer} dangerouslySetInnerHTML={{ __html: answer }}></p>)}
                        </div>

                    </div>)}
            </div>




        </div >

    );
}

export default Services;