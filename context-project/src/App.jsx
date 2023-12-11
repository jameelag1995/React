import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GiftContextProvider } from './components/context/GiftContext/GiftContext'
import GrandFather from './components/GreatGrandFather/GrandFather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GiftContextProvider>
        <GrandFather/>
      </GiftContextProvider>
    </>
  )
}

export default App
