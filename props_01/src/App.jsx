import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
 <>
 <Navbar/>
   <div className="container">
    <div className="row">
      <Card percentage={20} price={30000}/>
      <Card percentage={22} price={33000}/>
      <Card percentage={24} price={34000}/>
      <Card percentage={26} price={36000}/>
    </div>
   </div>
 </>
  )
}

export default App