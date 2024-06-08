
import './App.css'
import Todoitems from './components/Todoitems'
import AddTodo from './components/AddTodo'
import { useState } from 'react'
import WelcomeMsg from './components/WelcomeMsg'


function App() {
  const initialTodoitems = []

  const[todoitems, setTodoItems
  ]=useState(initialTodoitems)

  const handleNewItem = (itemName, itemDueDate)=>{
    console.log(`New Item Add: ${itemName} Date:${itemDueDate} `);
    const newTodoitems =[...todoitems, {name: itemName, dueDate:itemDueDate}];
    setTodoItems(newTodoitems)
  }
  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems = todoitems.filter(item => item.name !== todoItemName); 
    setTodoItems(newTodoItems)

  }
  return (
    <>
    <h1 className='heading'>Todo App</h1>
    <center className='todo-container'>
      <AddTodo onNewItem={handleNewItem} />
      {todoitems.length === 0 && <WelcomeMsg />}
      <Todoitems todoItems={todoitems} onDeleteClick={handleDeleteItem} />
    </center>
      
    </>
  )
}

export default App
