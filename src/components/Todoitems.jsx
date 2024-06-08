import TodoItem from "./TodoItem";
import './Todoitems.css'
const Todoitems = ({todoItems , onDeleteClick})=>{
  return <>
  <div className='items-container'>
    {todoItems.map(item => <TodoItem todoDate={item.dueDate} todoName = {item.name} onDeleteClick={onDeleteClick}></TodoItem>)}
    
  </div>
  </>
}
export default Todoitems;