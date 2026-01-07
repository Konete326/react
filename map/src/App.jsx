import React from 'react'
import Chip from './components/Chip'
import Navbar from './components/Navbar'
import Card from './components/Card'


function App() {
  const arr = ["M2", "M3", "M4", "M5"]
  const cardData = [
    {
      
      rate: "$150/hr",
      title: "Senior Backend Engineer",
      company: "Google",
      icon: "google",
      bookmarked: true
    },
    {
    
      rate: "$120/hr",
      title: "Frontend Developer",
      company: "Meta",
      icon: "meta",
      bookmarked: false
    },
    {
      
      rate: "$180/hr",
      title: "DevOps Engineer",
      company: "Amazon",
      icon: "aws",
      bookmarked: true
    },
    {
      
      rate: "$140/hr",
      title: "Full Stack Engineer",
      company: "Netflix",
      icon: "netflix",
      bookmarked: false
    },
    {
     
      rate: "$160/hr",
      title: "Cloud Architect",
      company: "Microsoft",
      icon: "azure",
      bookmarked: true
    },
    {
      
      rate: "$110/hr",
      title: "Junior Backend Engineer",
      company: "Spotify",
      icon: "spotify",
      bookmarked: false
    },
    {
      
      rate: "$200/hr",
      title: "Principal Software Engineer",
      company: "Apple",
      icon: "apple",
      bookmarked: true
    },
    {
     
      rate: "$135/hr",
      title: "Mobile App Developer",
      company: "Uber",
      icon: "uber",
      bookmarked: false
    },
    {
   
      rate: "$155/hr",
      title: "Data Engineer",
      company: "Airbnb",
      icon: "airbnb",
      bookmarked: true
    },
    {
     
      rate: "$170/hr",
      title: "AI/ML Engineer",
      company: "OpenAI",
      icon: "openai",
      bookmarked: true
    }
  ];


  return (
    <>
      <Navbar />

      <div className="container mt-2 ">
        <div className="row">
          {arr.map((element, index) => (
            <Chip key={index} name={element} />
          ))}
        </div>
      </div>

      



      <div className="container mt-2 ">
        <div className="row">
          {cardData.map((cards,index) => (

         
              <Card key={index} title={cards.title} rate={cards.rate} company={cards.company} />
          

          ))}
        </div>
      </div>
    </>
  )
}

export default App
