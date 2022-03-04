import React from "react";

export default function DisplayContact(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h4>{props.email}</h4>
            <h4>{props.phone}</h4>
        </div>
    )
}