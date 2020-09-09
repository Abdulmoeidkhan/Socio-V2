import React from "react"
import './PictureTiles.css'



function PictureTiles(props) {
    return (
        <div>
            <div className="column col-xs-6" id="caption">
                <span className="text">
                    <h1>{props.name}</h1>
                </span>
                <img src={props.pictureSrc} />
            </div>
        </div>
    )


}

export default PictureTiles

