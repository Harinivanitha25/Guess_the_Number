import React from 'react'
import { useLocation } from 'react-router-dom';
import './index.css'
function Finish() {
    const { state } = useLocation();
  const { num , status} = state || {};
  return (
    <>

    <p className='title'>Guess the Number</p>
     <div className='line'></div>
     {status === 'success' ? (
        <p className='finish success'>Great! You guessed it right.<br></br> The number is {num}.</p>
      ) : (
        <p className='finish' >There is no attempts available. <br></br>The correct number is {num}.</p>
      )}
      <a href="/" className='try' >Try Again</a>
    </>
  )
}

export default Finish