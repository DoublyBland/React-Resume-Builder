import React from "react";

export default function Contact(props) {
    return(
        <div className="contact-container">
            <h1>Contact</h1>
            <form>
                <input type="text" placeholder="John Doe"
                name="name" value = {props.name}
                onChange={(e) =>props.handleChange(e)}
                />
                <input type="email" placeholder="abc@mail.com"
                name="email" value = {props.email}
                onChange={props.handleChange}
                />
                <input type="tel" placeholder="111-222-3333"
                name="phone" value = {props.phone}
                onChange={props.handleChange}
                />
            </form>
        </div>
    )
}