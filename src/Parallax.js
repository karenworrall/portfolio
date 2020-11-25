import React, { useEffect, useState } from 'react';
import './Parallax.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Words from './words.json'
// import Word from './Word'


function Parallax()
{
    const [offset, setOffset] = useState(0)
    useEffect(() =>
    {
        if (window.innerWidth < 800) { return; }
        function handleScroll()
        {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () =>
        {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const importAll = r => r.keys().map(r)


    const images = importAll(require.context('./img/featuredIn', false))

    // for (var i = Words.length - 1; i > 0; i--)
    // {
    //     const j = Math.floor(Math.random() * i)
    //     const temp = Words[i]
    //     Words[i] = Words[j]
    //     Words[j] = temp
    // }


    // var ID = 0;
    // const getUniqueId = () =>
    // {
    //     ID++;
    //     return ID;
    // };

    return (

        <div className="parallax" id="parallax">
            <img src={require('./img/Main10.jpg')} alt="main" style={{
                backgroundPosition: 'right bottom',
                transform: `translateY(${offset * 0.7}px)`,
            }} />
            <div className="main-content">
                <h1>Welcome to the world of Copywriter and Content Writer Karen Worrall.</h1>
                <div className="right-half">
                    <div className="left"></div>
                    <div className="right">
                        <div className="boxed-content">

                            <h1>I write engaging copy that educates, entertains, connects, persuades and sells—whatever your project needs.</h1>
                        </div>

                        <div className="fakeButton">
                            <AnchorLink href="#portfolio">See my work</AnchorLink>
                        </div>
                    </div>

                </div>

            </div>

            <div className="intro-content">

                <div className="logo-wrapper">
                    <h1>Published in:</h1>
                    {images.map(item => <img src={item} alt='maow' key={images.findIndex((element) => element === item)} />)}
                </div>
                {/* <h2>I have ideas aplenty and I get your message into the brains of your potential customers.</h2> */}
                {/* <div className="fakeButton">
                    <AnchorLink href="#portfolio">See my work</AnchorLink>
                </div> */}
            </div>
            <div className="image-roll">

            </div>



        </div>
    )
}

export default Parallax