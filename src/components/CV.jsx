import { ReactDOM } from "react";

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
        <div>
            <div>
                <p>{cvName}</p>
                <p>{cvEmail}</p>
                <p>{cvPhone}</p>
                <p>{cvAddress}</p>
            </div>
            <div>
                {cvEducation.map((edu) => (
                    <div key={edu.id}>
                        <h1>{edu.school}</h1>
                        <p>{edu.degree}</p>
                        <p>{edu.city}, {edu.country}</p>
                        <p>{edu.startDate.getMonth()}/{edu.startDate.getDate()}/{edu.startDate.getFullYear()} - {edu.endDate.getMonth()}/{edu.endDate.getDate()}/{edu.endDate.getFullYear()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CV;