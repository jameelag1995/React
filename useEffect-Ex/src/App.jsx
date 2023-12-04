import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoriteColor from './components/FavoriteColor/FavoriteColor'
import BoxAnimation from './components/BoxAnimation/BoxAnimation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Ex 13.1 */}
      {/* <FavoriteColor /> */}
      {/* Ex 13.2 */}
      <BoxAnimation />
    </div>
  )
}

export default App
