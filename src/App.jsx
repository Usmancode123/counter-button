import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './btn.css'

function App() {
  const [count, setCount] = useState(0)
const handelIncrease=()=>{
  setCount(count +1)
}
const handelDecrease=()=>{
setCount(count -1)
}

return   (   <>
 
<div className='Container'>
  <div>
    <p>React: {count}</p>
    <div>
      <button onClick={handelIncrease} className='red'>Increament</button>
      <button onClick={handelDecrease} className='green'>Decrement</button>
    </div>
  </div>
</div>
  
  </>
)
  
}

export default App;
