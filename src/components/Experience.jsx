function Experience({experienceFunction, stateFunction, buttonText, expPlaceholder}) {
    
    let jobTitleValue = '';
    let companyValue = '';
    let startDateValue = '';
    let endDateValue = '';
    let descriptionValue = '';

    if (expPlaceholder != null) {
        jobTitleValue = expPlaceholder.title;
        companyValue = expPlaceholder.company;
        startDateValue = expPlaceholder.startDate.toISOString().substring(0, 10);
        endDateValue = expPlaceholder.endDate.toISOString().substring(0, 10);
        descriptionValue = expPlaceholder.description;
    }
    
    return (
        <div className="basic">
            <div>
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" defaultValue={jobTitleValue}/>
            </div>

            <div>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" defaultValue={companyValue}/>
            </div>

            <div>
                <label htmlFor="startDateJob">Start Date:</label>
                <input type="date" id="startDateJob" name="startDateJob" defaultValue={startDateValue}/>
            </div>

            <div>
                <label htmlFor="endDateJob">End Date:</label>
                <input type="date" id="endDateJob" name="endDateJob" defaultValue={endDateValue}/>
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" defaultValue={descriptionValue}/>
            </div>

            <div>
                <button onClick={() => {stateFunction(false)}}>X</button>
                <button onClick={experienceFunction}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Experience;