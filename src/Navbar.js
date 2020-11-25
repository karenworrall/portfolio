import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar()
{
    return (
        <div className="nav_container">
            {/* <h1 className="logo">Karen Worrall</h1> */}
            <img className="logo" alt='Karen Worrall Logo' src={require('./img/Karen_Worrall_Logo.png')} />
            <input type="checkbox" id="nav_toggle" className="nav_toggle" />
            <nav>
                <ul>
                    <li>
                        <AnchorLink href="#parallax">Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#about">About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#services">Services</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#portfolio">Portfolio</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#testimonials">Experience</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact">Contact</AnchorLink>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav_toggle" className="nav_toggle_label">
                <span></span>
            </label>
        </div>
    )
}

export default Navbar