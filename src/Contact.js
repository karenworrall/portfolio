import React from 'react';
import './Contact.css'
import { useInView } from 'react-intersection-observer'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Contact(props)
{
    const [ref, inView] = useInView({
        threshold: window.innerHeight < 800 ? 0 : 0.2,
        triggerOnce: true

    })

    const FooterImageMaxWidth = Math.min(document.documentElement.clientWidth / 4, 150)
    // const sendmessage = (() => { alert("sendmessage") })

    return (

        <div ref={ref} className={"contact" + (inView ? " section-animate" : "")} id="contact">
            <h1 className="section-title">Contact</h1>
            <div className="contact-wrapper">
                <h2>I listen to your words to know how to get your message or story across using my words. If you’d like to find out how I can help you, your brand or next project, please get in touch.</h2>
                <h3><b>Email:</b> <a href="mailto:info@karenworrall.co.uk" target="_blank" rel="noopener noreferrer">info@karenworrall.co.uk</a> </h3>
                {/* <h3><b>Phone:</b> <a href="tel: +447935506131">+44(0)7935506131</a></h3> */}
            </div>

            {/* <div className="form-wrapper">
                <form onSubmit={sendmessage}>

                    <input type="text" name="name" placeholder="Name" />

                    <input type="text" name="email" placeholder="Email" />

                    <textarea name="message" placeholder="Your message" />

                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div> */}
            <footer>
                <div className="Footer">
                    <div className="link-wrapper">
                        <AnchorLink className="anchor" href="#parallax" >Back to top</AnchorLink>
                    </div>

                    <div className="award-wrapper">
                        <img style={{ maxWidth: `${FooterImageMaxWidth}px` }} src={require('./img/copywriter.png')} alt="Copywriter badge" />
                        <img style={{ maxWidth: `${FooterImageMaxWidth}px` }} src={require('./img/Editor.png')} alt="Editor badge" />
                        <img style={{ maxWidth: `${FooterImageMaxWidth}px` }} src={require('./img/Proofreader.png')} alt="Proofreader badge" />
                    </div>

                    <p>Website designed by <a href="https://nickworrall.co.uk" target="_blank" rel="noopener noreferrer">Nick Worrall</a> &#169; 2020</p>
                </div>
            </footer>

        </div>
    )
}

export default Contact