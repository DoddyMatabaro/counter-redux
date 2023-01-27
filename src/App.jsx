import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store/index";


function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch(actions.increment())
  }
  const decrement = ()=>{
    dispatch(actions.decrement())
  }
  const addValue = ()=>{
    dispatch(actions.addValue(10))
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
