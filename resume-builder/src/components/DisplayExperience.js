import React from "react";

export default function DisplayExperience(props) {
    return(
        <div>
            <h3>{props.company}</h3>
            <h3>{props.position}</h3>
            <h3>{props.responsibilities}</h3>
            <h3>{props.start}</h3>
            <h3>{props.end}</h3>
        </div>
    )
}