import React from 'react';
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Footer(props)
{


    return (
        <div className="Footer">
            <div className="link-wrapper">
                <AnchorLink className="anchor" href="#parallax" >Back to top</AnchorLink>
            </div>

            <div className="award-wrapper">
                <img src={require('./img/copywriter.png')} alt="Copywriter badge" />
                <img src={require('./img/Editor.png')} alt="Editor badge" />
                <img src={require('./img/Proofreader.png')} alt="Proofreader badge" />
            </div>

            <p>Website designed by <a href="mailto:nick97000@gmail.com" target="_blank" rel="noopener noreferrer">Nick Worrall</a> &#169; 2020</p>
        </div>
    );
}

export default Footer;