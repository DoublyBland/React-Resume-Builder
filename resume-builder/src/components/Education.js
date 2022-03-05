import React from "react";

export default function Education(props) {
    return(
        <div>
            <h1>Education</h1>
            <form>
                <label htmlFor="school">School: </label>
                <input type="text" placeholder="Harvard"
                name="school" value = {props.school}
                onChange={(e)=>props.handleChange(e, props.id)}
                />
                <br/>
                <label htmlFor="degree">Major: </label>
                <input type="text" placeholder="Psychology"
                name="degree" value = {props.degree}
                onChange={(e)=>props.handleChange(e, props.id)}
                />
                <br/>
                <label htmlFor="level">Degree: </label>
                <input type="text" placeholder="Bachelors"
                name="level" value = {props.level}
                onChange={(e)=>props.handleChange(e, props.id)}
                />
                <br/>
                <label htmlFor="gradYear">Year Graduated: </label>
                <input type="number" placeholder="Year Gradutated"
                name="gradYear" value = {props.gradYear}
                onChange={(e)=>props.handleChange(e, props.id)}
                />
            </form>
            <button onClick={props.onButton}>Add Education</button>
        </div>
    )
}