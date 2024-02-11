import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../store/todo/todoSlice"

export default function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return <>
        <ul className="list-group d-flex m-auto col-4 shadow">
            {
                todos?.map((item, index) => 
                <li 
                className="list-group-item list-group-item-action" role="button"
                onClick={()=> dispatch(removeTodo(index))} 
                key={index}>
                    {item}
                    </li>)
            }
        </ul>
    </>
}