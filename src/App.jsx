import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import CV from './components/CV'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <CV />
    </>
  )
}

export default App
