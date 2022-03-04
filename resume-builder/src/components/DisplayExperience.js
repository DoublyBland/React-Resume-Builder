import React from "react";

export default function DisplayExperience(props) {
    return(
        <div>
            <h3>{props.company}</h3>
            <h3>{props.position}</h3>
            <h3>{props.responsibilities}</h3>
            <h3>{props.start}</h3>
            <h3>{props.end}</h3>
            {props.id !== 1 && <button onClick={(e) => props.remove(e, props.id)}>Remove?</button>}
            <button onClick={(e) => props.handleEdit(e, props.id)}>Edit</button>
        </div>
    )
}