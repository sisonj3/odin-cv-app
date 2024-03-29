import {format} from "date-fns"
import { ReactDOM } from "react";
import '../styles/CV.css'

function CV({ cvName, cvEmail, cvPhone, cvAddress,
    cvEducation, cvExperience }) {
    
    const cvDiv = document.createElement('div');

    // Personal info
    const nameP = document.createElement('p');
    const emailP = document.createElement('p');
    const phoneP = document.createElement('p');
    const addressP = document.createElement('p');

    // Set personal info
    nameP.textContent = cvName;
    emailP.textContent = cvEmail;
    phoneP.textContent = cvPhone;
    addressP.textContent = cvAddress;
    
    // Add Personal info to cvDiv
    cvDiv.appendChild(nameP);
    cvDiv.appendChild(emailP);
    cvDiv.appendChild(phoneP);
    cvDiv.appendChild(addressP);

    console.log(cvEducation);

    return (
        <div className="CV">
            <div className="personal">
                <h1>{cvName}</h1>
                <div className="contact">
                    <p>{cvEmail}</p>
                    <p>{cvPhone}</p>
                </div>
                <p className="address">{cvAddress}</p>
            </div>
            <div>
                <h2>Education</h2>
                {cvEducation.map((edu) => (
                    <div key={edu.id} className="education">
                        <div className="degree">
                            <h3>{edu.school}</h3>
                            <p>{edu.degree}</p>
                        </div>
                        <div>
                            <p>{edu.city}, {edu.country}</p>
                            <p>{format(edu.startDate, "MM/dd/yyyy")} - {format(edu.endDate, "MM/dd/yyyy")}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Experience</h2>
                {cvExperience.map((job) => (
                    <div key={job.id} className="experience">
                        <div>
                            <h3>{job.title} - {job.company}</h3>
                            <p>{format(job.startDate, "MM/dd/yyyy")} - {format(job.endDate, "MM/dd/yyyy")}</p>
                        </div> 
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CV;