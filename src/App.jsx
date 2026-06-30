import Button from './components/Button';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return(
    <>
      <h2>Current Count is: {count}</h2>
      <div className='btns'>
        <Button text="Increase" onClick={() => setCount(prev => prev + 1)} />
        <Button text="Decrease" onClick={() => setCount(prev => prev - 1)} />
        <Button text="Reset" onClick={() => setCount(0)} />
      </div>
    </>
  )
}

export default App
