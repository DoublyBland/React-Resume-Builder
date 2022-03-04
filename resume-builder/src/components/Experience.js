import React from "react";

export default function Experience(props) {
    return(
        <div>
        <h1>Work Experience</h1>
        <form>
            <input type="text" placeholder="Walmart"
            name="company" value = {props.company}
            onChange={props.handleChange}
            />
            <input type="text" placeholder="Greeter"
            name="position" value = {props.position}
            onChange={props.handleChange}
            />
            <input type="text" placeholder="Saying hello"
            name="responsibilities" value = {props.responsibilities}
            onChange={props.handleChange}
            />
            <input type="number" placeholder="Year Started"
            name="start" value = {props.start}
            onChange={props.handleChange}
            />
            <input type="number" placeholder="Year Left"
            name="end" value = {props.end}
            onChange={props.handleChange}
            />
        </form>
        <button>Add Experience</button>
    </div>
    )
}