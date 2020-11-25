import React from 'react';
import { useSpring, animated, config } from 'react-spring'

import "./Word.css"

function Word(props)
{

    const animation = useSpring({
        from: { opacity: 0, transform: 'scale(0.7)' },
        to: [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.7)' }],
        delay: props.id * 200,
        config: config.molasses,
    })

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const position = {
        top: Math.floor(Math.random() * (vh - 200)),
        right: Math.floor(Math.random() * (vw - 200)),
        fontSize: Math.min(60, vw / 20)
    }

    return (

        <animated.div className="box" style={{ ...animation, ...position }}>
            <h3>{props.word}</h3>
        </animated.div >




    );
}

export default Word;