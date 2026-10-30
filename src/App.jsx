import {useState, useEffect} from "react"
import Button from "./Button"

function App() {
  
   const [ratings, setRatings] = useState({
     good: 0,
     neutral: 0,
     bad: 0
   }) 
   const [rated, setRated] = useState(false)

  function rateGood() {
     setRatings({...ratings, good: ratings.good + 1})
     setRated(true)
  }
   function rateNeutral() {
     setRatings({...ratings, neutral: ratings.neutral + 1})
     setRated(true)
  }
   function rateBad() {
     setRatings({...ratings, bad: ratings.bad + 1})
     setRated(true)
  }

  return (
    <div className="App">
     <h1>Give feedback!</h1>
     <p>How did we do?</p>
      { rated ? ( <h1> We Appreciate the Feedback!</h1>) : (
      <div>
      <Button text = "Good!" onClick={rateGood}></Button>
      <Button text = "Alright." onClick={rateNeutral}></Button>
      <Button text = "Terrible!" onClick={rateBad}></Button>
      </div>) }
        
      <h1>Good: {ratings.good}</h1>
      <h1>Alright: {ratings.neutral}</h1>
      <h1>Terrible: {ratings.bad}</h1>
    </div>
  )
}

export default App
