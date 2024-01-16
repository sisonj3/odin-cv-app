function Form({ parentCallback }) {

    let returnData = (event) => {
        parentCallback(event.target.name.value);
        event.preventDefault();
    }

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
                <div>
                    <label htmlFor="school">School:</label>
                    <input type="text" id="school" name="school"/>
                </div>

                <div>
                    <label htmlFor="degree">Degree:</label>
                    <input type="text" id="degree" name="degree"/>
                </div>

                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city"/>
                </div>

                <div>
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country"/>
                </div>

                <div>
                    <label htmlFor="startDateEdu">Start Date:</label>
                    <input type="date" id="startDateEdu" name="startDateEdu"/>
                </div>

                <div>
                    <label htmlFor="endDateEdu">End Date:</label>
                    <input type="date" id="endDateEdu" name="endDateEdu"/>
                </div>
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
            
            <input type="submit"/>

        </form>
    )
}

export default Form;