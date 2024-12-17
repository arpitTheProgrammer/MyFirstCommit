import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const HandleIncrease = () =>{
    setCount(count+1);
  }
  return (
    <div className="App">
       <h1>
        {count}
       </h1>
       <button onClick={HandleIncrease}>Increase Count</button>
    </div>
  );
}

export default App;
