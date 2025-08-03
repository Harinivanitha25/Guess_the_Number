import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'
function Game() {
   const { state } = useLocation();
  const { attempt, from, to } = state || {};
    const navigate = useNavigate();

  const [attempt1, setAttempt] = useState(attempt || 0);
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");
  const [num, setNum] = useState(null); // Initialize as null

 
  useEffect(() => {
    if (!isNaN(from) && !isNaN(to) && Number(from) <= Number(to)) {
      const random = Math.floor(Math.random() * (Number(to) - Number(from) + 1)) + Number(from);
      setNum(random);
    }
  }, [from, to]);
  function handleSubmit(e)
  {  e.preventDefault();
    
   if (input == num) {
    navigate('/finish', { state: { num, status: 'success' } });
  } else {
    if (attempt1 > 1) {
      if (input > num) {
        setDisplay(`Lesser than ${input}`);
      } else {
        setDisplay(`Greater than ${input}`);
      }
      setInput("");
      setAttempt((prev) => prev - 1);
    } else {
      navigate('/finish', { state: { num, status: 'fail' } });
    }
  }
  
  }
  return (
    <>
      <p className='title'>Guess The Number</p>
       <div className='line'></div>
     <div className='gameb'>
     <label className='inputl' >Enter the Number to guess: </label>
      <input className='number'
      type="number"
      value={input}
       onChange={(e) => setInput((e.target.value))}
  />
  </div>
  <button className='check' onClick={handleSubmit}>Check</button>

    
      <p className='display'>{display}</p>
      <p className='attempt'>Attempts allowed: {attempt1}</p>
    </>
  );
}

export default Game;
