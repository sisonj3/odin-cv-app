import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import CV from './components/CV'
import './App.css'

function App() {
  const [name, setName] = useState('First Last');
  const [email, setEmail] = useState('notReal@mail.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [address, setAddress] = useState('1234 Main St');

  let getFormData = (formName, formEmail, formPhone, formAddress) => {
    setName(formName);
    setEmail(formEmail);
    setPhone(formPhone);
    setAddress(formAddress);
  };

  return (
    <>
      <Form parentCallback={getFormData} />
      <CV cvName={name}
        cvEmail={email}
        cvPhone={phone}
        cvAddress={address}/>
    </>
  );

  
}

export default App
