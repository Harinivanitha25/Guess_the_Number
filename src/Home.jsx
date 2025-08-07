import React from 'react'
import Range from './Range'
import App from './App'
import Finish from './Finish'
import InstructionBox from './InstructionBox';
import { HashRouter, Routes, Route } from 'react-router-dom' // ✅ Changed from BrowserRouter to HashRouter

function Home() {
  return (
    <>
     
      <HashRouter>
         <InstructionBox />
        <Routes>
          <Route path='/' element={<Range />} />
          <Route path='/Game' element={<App />} />
          <Route path='/Finish' element={<Finish />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default Home
