import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch({type: 'INC'});
  }
  const decrement = ()=>{
    dispatch({type: 'DESC'});
  }
  const addValue = ()=>{
    dispatch({type:'ADD',payload: 10});
  }
  console.log(counter);
  return (
    <div className="App">
     <h1>Counter App</h1>
     <h2>{counter}</h2>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Descriment</button>
     <button onClick={addValue}>Add 10</button>
    </div>
  )
}

export default App
