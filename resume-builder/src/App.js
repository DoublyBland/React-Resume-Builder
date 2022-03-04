import React from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import DisplayContact from "./components/DisplayContact";
import DisplayEducation from "./components/DisplayEducation";
import DisplayExperience from "./components/DisplayExperience";

export default function App() {
    const [contactInfo, setContactInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
    })
    const [education, setEducation] = React.useState(
        {
            school: "Test",
            degree: "Test",
            level: "bachelor",
            gradYear: 2015,
            index: 1,
        }
)

    const [experience, setExperience] = React.useState([
        {
            company: "",
            position: "",
            responsibilities: [],
            start: "",
            end: ""
        }
    ])

    const [educationArray, setEducationArray] = React.useState([{
        ...education,
    }])


       let educationItems = educationArray.map(item => {
           return (
            <DisplayEducation
            key={item.index}
            school={item.school}
            degree={item.degree}
            level={item.level}
            gradYear={item.gradYear}
            id={item.index}
            remove={removeEducation}
            />
       )
       })

       function addEducation() {
           let newIndex = education.index +1;
           console.log(newIndex)
           setEducation(education => {
               return{...education, index: newIndex}
           })
           console.log(education)
           setEducationArray(prevState => {
               return ([...prevState, {...education, index: newIndex}])
           })
           console.log(educationArray)
       }

       function removeEducation(event, index) {
           let newArray = educationArray.pop(index-1)
        setEducationArray(newArray)
       }

    function handleUpdateContact(event){
        const {name, value} = event.target
        setContactInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }))
    }

    function handleUpdateEducation(event, id){
        const {name, value} = event.target
        setEducation(prevInfo => ({
            ...prevInfo,
            [name] : value,
        }))
    }

    function handleUpdateExperience(event){
        const {name, value} = event.target
        setExperience(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }))
    }
    return(
    <div className="app-container">
        <div className="input-container">
            <Contact
            handleChange={handleUpdateContact}
            name={contactInfo.name}
            email={contactInfo.email}
            phone={contactInfo.phone}
            />
            <Education
            handleChange={handleUpdateEducation}
            school={education.school}
            degree={education.degree}
            level={education.level}
            gradYear={education.gradYear}
            id={education.index}
            onButton={addEducation}
            />
            <Experience
            handleChange={handleUpdateExperience}
            company={experience.company}
            position={experience.position}
            responsibilities={experience.responsibilities}
            start={experience.start}
            end={experience.end}
            />
        </div>
        <div className="display-container">
            <DisplayContact
            name={contactInfo.name}
            email={contactInfo.email}
            phone={contactInfo.phone}
            />
            <h1>Education</h1>
            {educationItems}
            <h1>Experience</h1>
            <DisplayExperience
            company={experience.company}
            position={experience.position}
            responsibilities={experience.responsibilities}
            start={experience.start}
            end={experience.end}
            />
        </div>
    </div>
    )
}