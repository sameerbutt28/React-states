import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function changeOfMind()
  {
    setIsGoingOut(prevState => !prevState)
    
  }

  return (
    <div className="App">
       <h1 className="statetitle">Do I feel like going out tonight?</h1>
            
                 <div onClick={changeOfMind} className="statevalue">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
    </div>
  );
}

export default App;

