function School({ educationFunction, stateFunction, buttonText, eduPlaceholder }) {
    
    let schoolValue = '';
    let degreeValue = '';
    let cityValue = '';
    let countryValue = '';
    let startDateValue = '';
    let endDateValue = '';

    if (eduPlaceholder != null) {
        schoolValue = eduPlaceholder.school;
        degreeValue = eduPlaceholder.degree;
        cityValue = eduPlaceholder.city;
        countryValue = eduPlaceholder.country;
        startDateValue = eduPlaceholder.startDate.toISOString().substring(0, 10);
        endDateValue = eduPlaceholder.endDate.toISOString().substring(0, 10);
    }

    return (
        <div className="basic">
            <div>
                <label htmlFor="school">School:</label>
                <input type="text" id="school" name="school" defaultValue={schoolValue}/>
            </div>

            <div>
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" name="degree" defaultValue={degreeValue}/>
            </div>

            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" defaultValue={cityValue}/>
            </div>

            <div>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" defaultValue={countryValue} />
            </div>

            <div>
                <label htmlFor="startDateEdu">Start Date:</label>
                <input type="date" id="startDateEdu" name="startDateEdu" defaultValue={startDateValue}/>
            </div>

            <div>
                <label htmlFor="endDateEdu">End Date:</label>
                <input type="date" id="endDateEdu" name="endDateEdu" defaultValue={endDateValue}/>
            </div>

            <div>
                <button onClick={() => {stateFunction(false)}}>X</button>
                <button onClick={educationFunction}>{buttonText}</button>
            </div>
        </div>
    )
}

export default School;