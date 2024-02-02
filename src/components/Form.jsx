import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import School from './School'

function Form({ parentCallback, parentEducation }) {

    // States
    const [isActive, setIsActive] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    const [eduIndex, setEduIndex] = useState(0);
    const [formEducation, setFormEducation] = useState(parentEducation.map((x) => x));

    // Function to return form information back to App.jsx
    let returnData = (event) => {
        parentCallback(event.target.name.value,
            event.target.email.value,
            event.target.phone.value,
            event.target.address.value,
            formEducation);
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
            startDate: new Date(childNodes[4].childNodes[1].value),
            endDate: new Date(childNodes[5].childNodes[1].value),
            id: uuidv4()
        };

        formEducation.push(formEdu);
        console.log(formEducation);
        // console.log(formEducation.indexOf(formEdu.id));
        
        setIsActive(false);
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
        event.preventDefault();
    }

    let editEduInfo = (event) => {
        setEduIndex(event.target.parentElement.attributes.index.value);
        setIsEditingEducation(true);
        event.preventDefault();
    }
    //////////////////////////////////////

    return (
        <form onSubmit={returnData}>            
            <div className="section">
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
                {isActive ? (
                    <School
                        educationFunction={addEducation}
                        stateFunction={setIsActive}
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
                    <div>
                        {formEducation.map((edu) => (
                            <div key={edu.id}>
                                <h1>{edu.school}</h1>
                                <p>{edu.degree}</p>
                                <p>{edu.city}, {edu.country}</p>
                                <p>{edu.startDate.getMonth()}/{edu.startDate.getDate()}/{edu.startDate.getFullYear()} - {edu.endDate.getMonth()}/{edu.endDate.getDate()}/{edu.endDate.getFullYear()}</p>
                            
                                <div index={formEducation.indexOf(edu)}>
                                    <button onClick={removeEducation}>Delete</button>

                                    <button onClick={editEduInfo}>Edit</button>
                                </div>
                            </div>
                        ))}
                    
                        <button onClick={() => setIsActive(true)}>Add</button>
                    </div>
                )}

            </div>

            <div className="section">
                <div>
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle"/>
                </div>

                <div>
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company"/>
                </div>

                <div>
                    <label htmlFor="startDateJob">Start Date:</label>
                    <input type="date" id="startDateJob" name="startDateJob"/>
                </div>

                <div>
                    <label htmlFor="endDateJob">End Date:</label>
                    <input type="date" id="endDateJob" name="endDateJob"/>
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description"/>
                </div>
            </div>
            
            <input type="submit" />
        </form>
    )
}

export default Form;