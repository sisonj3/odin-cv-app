function School({addEducation}) {
    return (
        <div>
            <div>
                <label htmlFor="school">School:</label>
                <input type="text" id="school" name="school" />
            </div>

            <div>
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" name="degree" />
            </div>

            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" />
            </div>

            <div>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" />
            </div>

            <div>
                <label htmlFor="startDateEdu">Start Date:</label>
                <input type="date" id="startDateEdu" name="startDateEdu" />
            </div>

            <div>
                <label htmlFor="endDateEdu">End Date:</label>
                <input type="date" id="endDateEdu" name="endDateEdu" />
            </div>

            <div>
                <button onClick={() => setIsActive(false)}>X</button>
                <button onClick={addEducation}>Add</button>
            </div>
        </div>
    )
}

export default School;