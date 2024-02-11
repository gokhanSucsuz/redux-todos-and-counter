import { useDispatch } from "react-redux"
import { addTodo } from "../store/todo/todoSlice"

export default function AddTodo(){
    const dispatch = useDispatch()

    function handleSubmit(event){
        event.preventDefault()
        const inputValue = event.target.elements[0].value
        dispatch(addTodo(inputValue))
        event.target.reset()
    }
    return <>
        <form onSubmit={handleSubmit} className="d-flex my-3">
            <div className="col-4 m-auto gap-3 d-flex flex-column">
                <h4 className="m-auto text-warning fw-bolder">You can remove todo onclick...</h4>
                <input type="text" className="form-control" placeholder="Please type todo..." />
                <button type="submit" className="form-control btn btn-success btn-sm">Add Todo</button>
            </div>
        </form>
    
    </>
}