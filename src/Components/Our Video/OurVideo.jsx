import React from "react";
import './Ourvideo.scss'
const OurVideo = () => {
    return (
        <div className="video">
            <h1>Watch our Video</h1>
            <iframe className="videoframe"
                // width="560" height="315"
                src="https://www.youtube.com/embed/0SDoUOBCAAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default OurVideo