function CV({ cvName, cvEmail, cvPhone, cvAddress,
            cvEducation, cvExperience}) {
    return (
        <div>
            <p>{cvName}</p>
            <p>{cvEmail}</p>
            <p>{cvPhone}</p>
            <p>{cvAddress}</p>    
        </div>
    );
}

export default CV;