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

    const [experience, setExperience] = React.useState(
        {
            company: "Test",
            position: "",
            responsibilities: "",
            start: "",
            end: "",
            index: 1
        }
    )

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

       const [experienceArray, setExperienceArray] = React.useState([{
        ...experience,
    }])
        console.log(educationArray)
        console.log(experienceArray)
        console.log(educationItems)
       let experienceItems = experienceArray.map(item => {
           return (
            <DisplayExperience
            key={item.index}
            company={item.company}
            position={item.position}
            responsibilities={item.responsibilities}
            start={item.start}
            end={item.end}
            id={item.index}
            remove={removeExperience}
            handleEdit={handleEditExperience}
            />
       )
       })
       console.log(experienceItems)

    function handleUpdateContact(event){
        const {name, value} = event.target
        setContactInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }))
    }

    function getUniqueID() {
        return Math.floor(Math.random() * 100000);
       }

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

    function addExperience() {
        let newIndex = getUniqueID();
        let newItem = {company: "",
        position: "",
        responsibilities: "",
        start: 0,
        end: 0,
        index:newIndex
     }
        setExperience({...newItem})
        setExperienceArray(prevState => {
            return ([...prevState, {...newItem}])
        })
    }

    function handleEditExperience(event, id){
        let selectedItem = experienceArray.find(item => id === item.index)
     setExperience({...selectedItem})
    }

    function removeExperience(event, index) {
        let newArray = experienceArray.filter(eduItem => eduItem.index !== index)
     setExperienceArray(newArray)
     let initialItem = experienceArray.find(item => item.index === 1)
     setExperience(initialItem)
    }

    function handleUpdateExperience(event, id){
        console.log(id)
        const {name, value} = event.target
        setExperience(prevInfo => ({
            ...prevInfo,
            [name] : value,
        }))
        let copyArray = experienceArray
        let position = copyArray.findIndex(element => element.index === id)
        let copyEditElement = copyArray.find(item => id === item.index)
        let editedCopy = {...copyEditElement, [name]: value}
        copyArray.splice((position), 1, editedCopy)
        setExperienceArray(copyArray)
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
            id={experience.index}
            onButton={addExperience}
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
            {experienceItems}
        </div>
    </div>
    )
}