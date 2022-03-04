import React from "react";

export default function Experience(props) {
    console.log(props)
    return(
        <div>
        <h1>Work Experience</h1>
        <form>
            <input type="text" placeholder="Walmart"
            name="company" value = {props.company}
            onChange={(e)=>props.handleChange(e, props.id)}
            />
            <input type="text" placeholder="Greeter"
            name="position" value = {props.position}
            onChange={(e)=>props.handleChange(e, props.id)}
            />
            <input type="text" placeholder="Saying hello"
            name="responsibilities" value = {props.responsibilities}
            onChange={(e)=>props.handleChange(e, props.id)}
            />
            <input type="number" placeholder="Year Started"
            name="start" value = {props.start}
            onChange={(e)=>props.handleChange(e, props.id)}
            />
            <input type="number" placeholder="Year Left"
            name="end" value = {props.end}
            onChange={(e)=>props.handleChange(e, props.id)}
            />
        </form>
        <button onClick={props.onButton}>Add Experience</button>
    </div>
    )
}