import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Form from './components/Form'
import CV from './components/CV'
import './App.css'

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

  let getFormData = (formName, formEmail, formPhone, formAddress, formEducation) => {
    setName(formName);
    setEmail(formEmail);
    setPhone(formPhone);
    setAddress(formAddress);
    setEducation(formEducation);
  };

  return (
    <>
      <Form parentCallback={getFormData} />
      <CV
        key={1}
        cvName={name}
        cvEmail={email}
        cvPhone={phone}
        cvAddress={address}
        cvEducation={education}/>
    </>
  );

  
}

export default App
