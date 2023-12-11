import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'
import WhatIsTime from './components/WhatIsTime'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* ex 20.1 */}
     {/* <Counter /> */}
     {/* ex 20.2 */}
     {/* <Todo/> */}
     {/* ex 20.3 */}
     <WhatIsTime/>
    </>
  )
}

export default App
