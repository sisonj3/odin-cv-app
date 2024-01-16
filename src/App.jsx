import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import CV from './components/CV'
import './App.css'

function App() {
  const [name, setName] = useState('First Last');

  let getFormData = (formName) => {
    setName(formName);
  };

  return (
    <>
      <Form parentCallback={getFormData} />
      <CV cvName={name}/>
    </>
  );

  
}

export default App
