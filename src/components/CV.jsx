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

    return (
        <div ref={(nodeElement) => {nodeElement && nodeElement.appendChild(cvDiv)}}/>
    );
}

export default CV;