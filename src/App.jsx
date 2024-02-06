import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Form from './components/Form'
import CV from './components/CV'
import './App.css'

///////////////////////
// * FIX DATE DISPLAY *
//////////////////////

function App() {
  // Personal Info States
  const [name, setName] = useState('First Last');
  const [email, setEmail] = useState('notReal@mail.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [address, setAddress] = useState('1234 Main St');

  // Education state
  const [education, setEducation] = useState([
    {
      school: 'UNLV',
      degree: 'Associates',
      city: 'Las Vegas',
      country: 'USA',
      startDate: new Date(2017, 8, 28),
      endDate: new Date(2019, 12, 16),
      id: uuidv4()
    }]);
  
  // Job state
  const [experience, setExperience] = useState([
    {
      jobTitle: 'Job Title',
      company: 'Company Inc.',
      startDate: new Date(2019, 6, 28),
      endDate: new Date(2019, 8, 16),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      id: uuidv4()
    }
  ]);

  let getFormData = (formName, formEmail, formPhone, formAddress, formEducation, formExperience) => {
    setName(formName);
    setEmail(formEmail);
    setPhone(formPhone);
    setAddress(formAddress);
    setEducation(formEducation);
    setExperience(formExperience);
  };

  return (
    <>
      <Form
        parentCallback={getFormData}
        parentEducation={education}
        parentExperience={experience}
      />
      <CV
        cvName={name}
        cvEmail={email}
        cvPhone={phone}
        cvAddress={address}
        cvEducation={education}
        cvExperience={experience}
      />
    </>
  );

  
}

export default App
