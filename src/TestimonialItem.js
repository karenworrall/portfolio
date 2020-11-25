import React from 'react';
import './TestimonialItem.css'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'

function TestimonialItem(props)
{
    // const fade = useSpring({
    //     to: {
    //         opacity: 1,
    //         transform: 'translateX(0px)',
    //     },

    //     from: {
    //         opacity: 0,
    //         transform: 'translateX(200px)'
    //     },
    //     delay: (300 * props.id + 500),
    //     immediate: !props.animate,

    //     reset: props.animate
    // })

    // const animation = {
    //     // transform: 'translate(0)',
    //     // transition: 'transform 500ms ease ' + 0.3 * props.id + 's'
    //     animationDelay: (0.3 * props.id + 0.5) + 's'

    // }


    // const none = {}
    return (
        <>
            <Spring
                from={{ opacity: 0, transform: props.id % 2 === 0 ? 'translateX(200px)' : 'translateX(-200px)' }}
                to={{ opacity: props.animate ? 1 : 0, transform: 'translateX(0px)' }}
                delay={(300)}
                reset={props.animate}
            >
                {optns =>
                    <animated.div className="testimonial" style={optns}>

                        <div className='name-wrapper'>
                            <img alt={props.source} src={require(`./img/testimonials/${props.source}.jpg`)}></img>
                            <h4>{props.source + " - " + props.location}</h4>
                        </div>

                        <hr />
                        <p>"{props.quote}"</p>

                    </animated.div>
                }


            </Spring>

            {/* <animated.div className="testimonial" style={props.animate ? fade : none}>
                <p>"{props.quote}"</p>
                <hr />
                <h4>{props.source + " - " + props.location}</h4>

            </animated.div> */}
        </>
    );
}

export default TestimonialItem;