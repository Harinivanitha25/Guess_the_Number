import React from 'react'
import Range from './Range'
import App from './App'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Finish from './Finish'
import InstructionBox from './InstructionBox';

function Home() {
  return (
    <>
     <InstructionBox />
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Range/>}/>
      <Route path='/Game' element={<App/>}/>
      <Route path='/Finish' element={<Finish/>}/>
     </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Home