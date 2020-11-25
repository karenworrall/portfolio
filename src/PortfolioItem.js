import React from 'react';
import './PortfolioItem.css'
import { Spring } from 'react-spring/renderprops';
import { animated } from 'react-spring'




const PortfolioItem = React.memo(props =>
{
    // const animation = {
    //     // transform: 'scale(1)',
    //     // transition: 'transform 500ms ease ' + 0.2 * props.id + 's'
    //     // animationName: 'fadeMe',
    //     // animationDuration: '0.7s',
    //     animationDelay: props.id * 0.2 + 's',
    // }
    // const none = {}



    return (
        <Spring
            from={{ opacity: 1 }}
            to={{ opacity: props.animate ? 1 : 1 }}
        //delay={props.id * 10}
        // reset={false}
        // reset={props.animate}
        >
            {optns =>

                <animated.div className={"portfolio-item" + (props.visible ? " _visible" : " _not-visible")} style={optns}>
                    <img alt="coming soon" src={require("./img/portfolio/" + props.imageLocation + "_thumb.jpg")} />
                    <div className="item-info" >
                        <h3 className="item-title">{props.title}</h3>
                        <div className="hidden-item-info">
                            <h3 className="item-client">{props.tags[1]}</h3>
                            {/* <h4>{props.tags[2]}</h4> */}
                            <button
                                className="read-more"
                                onClick={() => props.setName(props.id)}
                            // onClick={() => props.item}
                            >
                                Read More
                        </button>
                        </div>

                    </div>
                </animated.div>

            }
        </Spring>

    )
})

export default PortfolioItem