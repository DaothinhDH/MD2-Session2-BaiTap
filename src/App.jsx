import { useState } from 'react'
import FormLogin from './components/FormLogin'
import Exercise_Bt12 from './components/Exercise_Bt12'
import Exercise_Bt13 from './components/Exercise_Bt13'
import Exercise_Bt14 from './components/Exercise_Bt14'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormLogin/> */}
      {/* <Exercise_Bt12/> */}
      {/* <Exercise_Bt13/> */}
      <Exercise_Bt14/>
    </>
  )
}

export default App
