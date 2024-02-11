import { useDispatch } from "react-redux"
import { addMore, increment, reset } from "../store/counter/counterSlice"

export default function CounterButtons(){
const dispatch = useDispatch()
    return <>
    
    <div className="d-flex justify-content-center p-3 gap-3">
          <button className="btn btn-success btn-sm" onClick={()=>dispatch(increment())}>Increment</button>
      <button className="btn btn-info btn-sm" onClick={()=>dispatch(addMore({item: 20}))}>Add More (20)</button>
      <button className="btn btn-danger btn-sm" onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </>
}