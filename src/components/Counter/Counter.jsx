"use client"
import React, { useState } from 'react';

const Counter = () => {
  const [counter,setCounter] = useState(0); 
  return (
    <div>
      <h1>This is next app</h1>
      <h1>Counter: {counter}</h1>
      <button className='btn btn-primary' onClick={()=>setCounter(counter+1)}>Increase</button>
      <button className='btn btn-danger' onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  );
};

export default Counter;