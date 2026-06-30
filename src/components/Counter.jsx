import Button from './Button';
import { useState } from 'react';
import '../App.css';

function Counter() {
    
    const [count, setCount] = useState(0);

      return(
        <>
            <h2>Current Count is: {count}</h2>
            <div className='btns'>
                <Button classN="inc" text="Increase" onClick={() => setCount(prev => prev + 1)} />
                <Button classN="dec" text="Decrease" onClick={() => setCount(prev => prev - 1)} />
                <Button classN="rst" text="Reset" onClick={() => setCount(0)} />
            </div>
        </>
      )
}

export default Counter