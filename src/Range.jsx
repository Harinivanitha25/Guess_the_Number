import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Range() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [attempt, setAttempt] = useState(null); 
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const range = to - from;

    let newAttempt = 10;
    if (range > 1000) newAttempt = 25;
    else if (range > 500) newAttempt = 20;
    else if(range> 100) newAttempt=15;

    if (from && to && +to > +from) {
      setAttempt(newAttempt);
      setSubmitted(true); 
    } else {
      alert('Please enter the range');
    }
  }

  useEffect(() => {
    if (submitted && attempt !== null) {
      navigate('/Game', { state: { attempt , from, to} });
    }
  }, [attempt, submitted, navigate]);

  return (
    <>
      <p className="title">Guess the Number</p>
      <div className='line'></div>
       <div className='inputb'>
      <p className='p1'>Enter the range to start the Game!</p>
      
      <form onSubmit={handleSubmit}>
        <label className='inputl'>From:</label>
        <input className='from'
          type="number"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label className='inputl'>To:</label>
        <input className='to'
          type="number"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <button className='start' type="submit">Start</button>
      </form>
      </div>
    </>
  );
}

export default Range;
