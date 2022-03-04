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
            level: "Test",
            gradYear: 2022,
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
            handleEdit={handleEdit}
            />
       )
       })

       function addEducation() {
           let newIndex = getUniqueID();
           let newItem = {school: "",
           degree: "",
           level: "",
           gradYear: 9999,
           index:newIndex
        }
           setEducation({...newItem})
           setEducationArray(prevState => {
               return ([...prevState, {...newItem}])
           })
       }

       function getUniqueID() {
        return Math.floor(Math.random() * 100000);
       }

       function handleEdit(event, id){
           let selectedItem = educationArray.find(item => id === item.index)
        setEducation({...selectedItem})
       }

       function removeEducation(event, index) {
           let newArray = educationArray.filter(eduItem => eduItem.index !== index)
        setEducationArray(newArray)
        let initialItem = educationArray.find(item => item.index === 1)
        setEducation(initialItem)
       }

    function handleUpdateContact(event){
        const {name, value} = event.target
        setContactInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }))
    }

    function handleUpdateEducation(event, id){
        console.log(id)
        const {name, value} = event.target
        setEducation(prevInfo => ({
            ...prevInfo,
            [name] : value,
        }))
        let copyArray = educationArray
        let position = copyArray.findIndex(element => element.index === id)
        let copyEditElement = copyArray.find(item => id === item.index)
        let editedCopy = {...copyEditElement, [name]: value}
        copyArray.splice((position), 1, editedCopy)
        setEducationArray(copyArray)
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