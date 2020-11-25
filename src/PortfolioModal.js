import React, { useState, useEffect } from 'react';
import './PortfolioModal.css'

const PortfolioModal = React.memo(props =>
{
    const [animation, setClassName] = useState("");

    useEffect(() =>
    {
        setClassName("fadein");
        setTimeout(() => setClassName(""), 500)
    }, []);


    return (

        <aside id="modal"
            className="modalWrapper"
            onClick={e => props.closeModal(e)}>
            <div className={"portfolioModal " + animation + props.fadeout}>

                <div>
                    <img alt="Modal" src={require("./img/portfolio/" + props.item[0].FileName + ".jpg")} />
                </div>
                <div className="modal-info">
                    <h1>
                        {props.item[0].Title}
                    </h1>
                    <h3>{props.item[0].Client}</h3>
                    <hr></hr>
                    <p>
                        {props.item[0].Info}
                    </p>

                    {props.item[0].Link === "" ?
                        <a className="link" target="_blank" rel="noopener noreferrer"
                            href={require("./img/portfolio/" + props.item[0].FileName + "." + props.item[0].FileType)}>
                            {props.item[0].Link === "" ? "View full size" : "Open Link"}
                        </a> :
                        <a className="link" target="_blank" rel="noopener noreferrer" href={props.item[0].Link}>
                            Open Link
                        </a>
                    }

                    <span className="close" onClick={props.toggleModal}>
                        X
                    </span>
                </div>


            </div>
        </aside>


    )
})

export default PortfolioModal