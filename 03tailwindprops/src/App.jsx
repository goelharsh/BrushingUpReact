import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl bg-green-600 p-3'>Using TailwindCSS with Vite</h1>
      <Card/>
    </>
  )
}

export default App
