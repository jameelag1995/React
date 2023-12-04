import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoriteColor from './components/FavoriteColor/FavoriteColor'
import BoxAnimation from './components/BoxAnimation/BoxAnimation'
import ChangingBox from './components/ChangingBox/ChangingBox'
import Spinner from './components/Spinner/Spinner'
import Focus from './components/Focus/Focus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Ex 13.1 */}
      {/* <FavoriteColor /> */}
      {/* Ex 13.2 */}
      {/* <BoxAnimation /> */}
      {/* Ex 13.3 */}
      {/* <ChangingBox /> */}
      {/* Ex 13.4 */}
      {/* <Spinner /> */}
      {/* Ex 13.5 */}
      <Focus />
    </div>
  )
}

export default App
