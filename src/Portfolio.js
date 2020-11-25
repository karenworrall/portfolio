import React, { useState, useEffect } from 'react';
import './Portfolio.css'
import './PortfolioModal.css'
import './PortfolioItem'
import PortfolioItem from './PortfolioItem';
import Items from './PortfolioItems.json'
// import PortfolioModal from './PortfolioModal';
import { useInView } from 'react-intersection-observer'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// import PortfolioFilter from './PortfolioFilter'

function Portfolio(props)
{
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    // const [triggerModal, setTriggerModal] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const [activeItem_, setActiveItem_] = useState("");

    // const [fadeOut, setFadeOut] = useState("");

    const [open, setOpen] = useState(false)

    useEffect(() =>
    {

        if (activeItem !== "")
        {
            // setTriggerModal(true);
            let item = Items.filter(p => p.id === activeItem)[0];
            setActiveItem_(item);
            setOpen(true);
        }
    }, [activeItem])

    // useEffect(() =>
    // {
    //     triggerModal === false &&
    //         setActiveItem("");
    // }, [triggerModal]);

    useEffect(() =>
    {
        open === false &&
            setActiveItem("")
    }, [open])

    // const toggleModal = () =>
    // {
    //     setFadeOut(" fadeout");
    //     setTimeout(() =>
    //     {
    //         setTriggerModal(false);
    //         setFadeOut("");
    //     }, 500);
    // };

    // const closeModal = e =>
    // {
    //     if (e.target.id === "modal")
    //     {
    //         toggleModal();
    //     }
    // };



    useEffect(() =>
    {

        setProjects(Items)
    }, [])

    useEffect(() =>
    {
        setProjects([]);

        const filtered = Items.filter(p => p.Tags.includes(filter));

        setProjects(filtered);

    }, [filter])

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true

    })


    const customModal = {
        modal: {
            maxWidth: '75vw',
            borderRadius: '20px'
        }

    }

    return (

        <div ref={ref} className={"portfolio" + (inView ? " section-animate" : "")} id="portfolio">
            <h1 className="section-title">Portfolio</h1>
            <div className="portfolio-labels">
                <div
                    className={(filter === "all") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'all').toString()}
                    onClick={() =>
                        setFilter('all')}>
                    All
                </div>
                {/* <div
                    className={(filter === "Copywriting") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'Copywriting').toString()}
                    onClick={() =>
                        setFilter('Copywriting')}>
                    Copywriting
                </div>
                <div
                    className={(filter === "Content Writing") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'Content Writing').toString()}
                    onClick={() =>
                        setFilter('Content Writing')}>
                    Content Writing
                </div> */}
                <div
                    className={(filter === "ASTA") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'ASTA').toString()}
                    onClick={() =>
                        setFilter('ASTA')}>
                    ASTA
                </div>
                <div
                    className={(filter === "National Geographic Traveller (UK)") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'National Geographic Traveller (UK)').toString()}
                    onClick={() =>
                        setFilter('National Geographic Traveller (UK)')}>
                    NatGeo (UK)
                </div>
                <div
                    className={(filter === "The Planet D travel site") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'The Planet D travel site').toString()}
                    onClick={() =>
                        setFilter('The Planet D travel site')}>
                    The Planet D
                </div>
                <div
                    className={(filter === "Postcards (Trade magazine)") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'Postcards (Trade magazine)').toString()}
                    onClick={() =>
                        setFilter('Postcards (Trade magazine)')}>
                    Postcards
                </div>
                <div
                    className={(filter === "Others") ? "portfolio-label active" : "portfolio-label"}
                    active={(filter === 'Others').toString()}
                    onClick={() =>
                        setFilter('Others')}>
                    Everything Else
                </div>
                {/* <PortfolioFilter filterName="all" filterDisplay="All" /> */}
            </div>

            <div className="portfolio-items">
                {projects.map(item =>
                    <PortfolioItem
                        key={item.id}
                        id={item.id}
                        title={item.Title}
                        tags={item.Tags}
                        imageLocation={item.FileName}
                        setName={value => setActiveItem(value)}
                        animate={inView}
                        visible={item.Tags.includes(filter)}
                        item={item}

                    />
                )}
            </div>

            {/* {triggerModal && (
                <PortfolioModal
                    toggleModal={toggleModal}
                    closeModal={closeModal}
                    item={Items.filter(p => p.id === activeItem)}
                    fadeout={fadeOut}
                />
            )} */}
            <Modal open={open} onClose={() => setOpen(false)} center styles={customModal}>
                {activeItem_ !== "" &&
                    <div className="portfolioModal">
                        <div>
                            <img alt="Modal" src={require("./img/portfolio/" + activeItem_.FileName + ".jpg")} />
                        </div>
                        <div className="modal-info">
                            <h1>{activeItem_.Title}</h1>
                            <h3>{activeItem_.Client}</h3>
                            <hr />
                            <p>{activeItem_.Info}</p>
                            <a className="link" target="blank" rel="noopener noreferrer"
                                href={activeItem_.Link === "" ?
                                    require("./img/portfolio/" + activeItem_.FileName + "." + activeItem_.FileType) :
                                    activeItem_.Link}>
                                {activeItem_.Link === "" ? "View full size" : "Open Link"}
                            </a>

                        </div>

                    </div>
                }

            </Modal>

        </div >
    )
}

export default Portfolio