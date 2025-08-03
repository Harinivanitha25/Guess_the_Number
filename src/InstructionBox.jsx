import React, { useState } from 'react';
import './index.css';

function InstructionBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="instruction-container">
      {!open ? (
        <button className="instruction-toggle" onClick={() => setOpen(true)}>
       Help        </button>
      ) : (
        <div className="instruction-box">
          <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
         
          <ol>
            <li>Select a range to generate a random number.</li>
            <li>Guess the number within given attempts.</li>
            <li>Hints will guide you higher/lower.</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default InstructionBox;
