import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type : "INC"})
  }
  const decrement = () => {
    dispatch({type: "DEC"})
  }
  const add = () => {
    dispatch({type: "AddBy10", payload: 10})
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick= {increment} className='increment'>iNCREASE</button>
        <button onClick= {decrement} className='decrement'>DECREASE</button>
        <button onClick= {add} >ADD  BY 10</button>
      </div>
    </div>
  );
}

export default App;
