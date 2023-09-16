import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-pink-500 text-4xl mt-5 text-center font-bold'> Course Registration</h1>
      
      <Main></Main>
    </>
  )
}

export default App
