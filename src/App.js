import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from './component/Cards/Cards'

import Nav from './component/Nav/Nav'
import { useState } from 'react';


function App() {
  
  const [loc, setLoc] = useState('')
  const [num, setNum] = useState(0)
  
  return (
    <div className="App">
      <Nav setLoc={setLoc} setNum={setNum} />
      <Cards loc={loc} num={num}/>
      <p className="bottom">created by <span style={{fontWeight:700}}>satellites7</span> - devChallenges.io</p>
    </div>
  );
}

export default App;
