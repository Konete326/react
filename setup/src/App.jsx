import React from 'react'
import Chip from './components/Chip'
import Navbar from './components/Navbar'

function App() {
  return (
  <>
  <Navbar/>
  <div className="container m-4">
    <div className="row">
      <Chip/>
    </div>
  </div>
  </>
  )
}

export default App