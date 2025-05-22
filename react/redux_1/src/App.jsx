import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement,increment, incrementTimeOut , decrementTimeOut } from './actions/CounterActions'

function App() {
  const dispatch=useDispatch();
  let count =useSelector((state)=>state.count);


  return (
    <>
      <div>{count}</div>
      <button onClick={()=>dispatch(increment())} className='btn btn-outline-success'>+</button>
      {""}
      <button onClick={()=>dispatch(decrement())} className='btn btn-outline-danger'>-</button>
      {""}
      <button onClick={()=>dispatch(incrementTimeOut())}  className='btn btn-outline-primary'>Increment</button>
      {""}
      <button onClick={()=>dispatch(decrementTimeOut())}  className='btn btn-outline-primary'>decrement</button>
    </>
  )
}

export default App
