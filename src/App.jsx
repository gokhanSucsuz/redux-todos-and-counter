import { useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
const value = useSelector(state => state.counter.value)
  return (
    <>
      <div className="container my-5 rounded-3">
        <div className="row rounded-3">
          <div className="col-sm bg-info-subtle shadow p-3 rounded">
            <h1 className="bg-white text-center rounded-3 shadow m-auto my-5 fw-bolder p-3">..:: React Redux Exercises ::..</h1>
        <div className="col-sm shadow p-3 rounded-3 d-flex justify-content-center flex-column">
          <h2 className="d-flex justify-content-center bg-white rounded-3 fw-bolder p-2">Counter ::: {value}</h2>
          <CounterButtons />
        </div>
        <div className="col-sm shadow p-3 rounded-3 d-flex justify-content-center flex-column my-3">
          <h2 className="d-flex justify-content-center bg-white rounded-3 fw-bolder p-2">..:: Todos ::..</h2>
        <AddTodo />
        <hr />
        <Todos />
        </div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
