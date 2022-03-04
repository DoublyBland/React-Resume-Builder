import React from "react";

export default function DisplayEducation(props) {
    return(
        <div>
            <h3>{props.school}</h3>
            <h3>{props.degree}</h3>
            <h3>{props.level}</h3>
            <h3>{props.gradYear}</h3>
            <button onClick={(e) => props.remove(e, props.id)}>Remove?</button>
        </div>
    )
}