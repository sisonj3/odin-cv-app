import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import School from './School'
import Experience from './Experience'
import '../styles/Form.css'

function Form({ parentCallback, parentEducation, parentExperience }) {

    // States
    const [isEduActive, setIsEduActive] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    const [eduIndex, setEduIndex] = useState(0);
    const [formEducation, setFormEducation] = useState(parentEducation.map((x) => x));

    const [isExpActive, setIsExpActive] = useState(false);
    const [isEditingExperience, setIsEditingExperience] = useState(false);
    const [expIndex, setExpIndex] = useState(0);
    const [formExperience, setFormExperience] = useState(parentExperience.map((x) => x));

    // Function to return form information back to App.jsx
    let returnData = (event) => {
        parentCallback(event.target.name.value,
            event.target.email.value,
            event.target.phone.value,
            event.target.address.value,
            formEducation,
            formExperience);
        event.preventDefault();
    }

    // Functions for Education
    let addEducation = (event) => {

        console.log('Adding Education...');

        let childNodes = event.target.parentElement.parentElement.childNodes;

        let formEdu = {
            school: childNodes[0].childNodes[1].value,
            degree: childNodes[1].childNodes[1].value,
            city: childNodes[2].childNodes[1].value,
            country: childNodes[3].childNodes[1].value,
            startDate: new Date(`${childNodes[4].childNodes[1].value}:00:00`),
            endDate: new Date(`${childNodes[5].childNodes[1].value}:00:00`),
            id: uuidv4()
        };

        formEducation.push(formEdu);
        console.log(formEducation);
        // console.log(formEducation.indexOf(formEdu.id));
        
        setIsEduActive(false);
        event.preventDefault();
    }

    let removeEducation = (event) => {
        let index = event.target.parentElement.attributes.index.value;
        console.log(`Deleting formEducation[${index}]...`);

        formEducation.splice(index, 1);
        setFormEducation(formEducation.map((x) => x));
        console.log(formEducation);
        event.preventDefault();
    }

    let editEducation = (event) => {
        console.log(`Editing Education...`);

        let edu = formEducation[eduIndex];
        let childNodes = event.target.parentElement.parentElement.childNodes;
        
        edu.school = childNodes[0].childNodes[1].value;
        edu.degree = childNodes[1].childNodes[1].value;
        edu.city = childNodes[2].childNodes[1].value;
        edu.country = childNodes[3].childNodes[1].value;
        edu.startDate = new Date(`${childNodes[4].childNodes[1].value}:00:00`);
        edu.endDate = new Date(`${childNodes[5].childNodes[1].value}:00:00`);
        
        setFormEducation(formEducation.map((x) => x));
        setIsEditingEducation(false);
        event.preventDefault();
    }

    let editEduInfo = (event) => {
        setEduIndex(event.target.parentElement.attributes.index.value);
        setIsEditingEducation(true);
        event.preventDefault();
    }
    //////////////////////////////////////

    // Functions for Experience
    let addExperience = (event) => {
        console.log('Adding Experience...');

        let childNodes = event.target.parentElement.parentElement.childNodes;

        console.log(childNodes);

        let formExp = {
            title: childNodes[0].childNodes[1].value,
            company: childNodes[1].childNodes[1].value,
            startDate: new Date(`${childNodes[2].childNodes[1].value}:00:00`),
            endDate: new Date(`${childNodes[3].childNodes[1].value}:00:00`),
            description: childNodes[4].childNodes[1].value,
            id: uuidv4()
        };

        formExperience.push(formExp);
        console.log(formExperience);

        setIsExpActive(false);

        event.preventDefault();
    }

    let removeExperience = (event) => {
        let index = event.target.parentElement.attributes.index.value;
        console.log(`Deleting formExperience[${index}]...`);

        formExperience.splice(index, 1);
        setFormExperience(formExperience.map((x) => x));
        console.log(formExperience);

        event.preventDefault();
    }

    let editExperience = (event) => {
        console.log(`Editing Experience...`);

        let exp = formExperience[expIndex];
        let childNodes = event.target.parentElement.parentElement.childNodes;

        exp.title = childNodes[0].childNodes[1].value;
        exp.company = childNodes[1].childNodes[1].value;
        exp.startDate = new Date(`${childNodes[2].childNodes[1].value}:00:00`);
        exp.endDate = new Date(`${childNodes[3].childNodes[1].value}:00:00`);
        exp.description = childNodes[4].childNodes[1].value;

        setFormExperience(formExperience.map((x) => x));
        setIsEditingExperience(false);
        event.preventDefault();
    }

    let editExpInfo = (event) => {
        setExpIndex(event.target.parentElement.attributes.index.value);
        setIsEditingExperience(true);
        event.preventDefault();
    }
    //////////////////////////////////////

    return (
        <form onSubmit={returnData}>            
            <div className="section basic">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id="email" name="email"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone"/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address"/>
                </div>
            </div>

            <div className="section">
                {isEduActive ? (
                    <School
                        educationFunction={addEducation}
                        stateFunction={setIsEduActive}
                        buttonText={'Add'}
                    />
                ) : isEditingEducation ? (
                        <School
                            educationFunction={editEducation}
                            stateFunction={setIsEditingEducation}
                            buttonText={'Confirm'} 
                            eduPlaceholder={formEducation[eduIndex]}
                        />
                ) : (
                    <ul>
                        {formEducation.map((edu) => (
                            <li key={edu.id}>
                                <h1>{edu.school}</h1>
                                <p>{edu.degree}</p>
                                <p>{edu.city}, {edu.country}</p>
                                <p>{edu.startDate.getMonth()}/{edu.startDate.getDate()}/{edu.startDate.getFullYear()} - {edu.endDate.getMonth()}/{edu.endDate.getDate()}/{edu.endDate.getFullYear()}</p>
                            
                                <div index={formEducation.indexOf(edu)}>
                                    <button onClick={removeEducation}>Delete</button>

                                    <button onClick={editEduInfo}>Edit</button>
                                </div>
                            </li>
                        ))}
                    
                        <button onClick={() => setIsEduActive(true)}>Add</button>
                    </ul>
                )}

            </div>

            <div className="section">
                {isExpActive ? (
                    <Experience
                        experienceFunction={addExperience}
                        stateFunction={setIsExpActive}
                        buttonText={'Add'}
                    />
                ) : isEditingExperience ? (
                        <Experience
                            experienceFunction={editExperience}
                            stateFunction={setIsEditingExperience}
                            buttonText={'Confirm'}
                            expPlaceholder={formExperience[expIndex]}
                        />
                ) : (
                    <ul>
                        {formExperience.map((job) => (
                            <li key={job.id}>
                                <h1>{job.title}</h1>
                                <p>{job.company}</p>
                                <p>{job.startDate.getMonth()}/{job.startDate.getDate()}/{job.startDate.getFullYear()} - {job.endDate.getMonth()}/{job.endDate.getDate()}/{job.endDate.getFullYear()}</p>
                                <p>{job.description}</p>

                                <div index={formExperience.indexOf(job)}>
                                    <button onClick={removeExperience}>Delete</button>

                                    <button onClick={editExpInfo}>Edit</button>
                                </div>
                            </li>
                        ))}
                                
                        <button onClick={() => setIsExpActive(true)}>Add</button>
                    </ul>   
                )}
                
            </div>
            
            <input type="submit" />
        </form>
    )
}

export default Form;