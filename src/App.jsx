import React from 'react'
import { useState } from 'react';

function App() {
 // const lista=[]//
const[tasks,setTasks]=useState([]); // en principio mi lista va a estar vacia en un []//
const [newTask,setNewTask]=useState('');

const handleInputChange=(event) =>{
  setNewTask(event.target.value);
};
const handleAddTask=() => {
  if(newTask.trim()!== "") {
    setTasks([... tasks, newTask]);
    setNewTask("");
  }
};


  return( 
  <div>
    <h1>To Do List</h1>
    <input 
    type="text" 
    
    placeholder='Agregar Tarea'
    value={newTask}
    onChange={handleInputChange}
    
    />
    <button onClick={handleAddTask}>Eliminar</button>
    <ul>
      {tasks.map((task,index) => (
      <li key={index}>
        {}
        {task}
        <button onClick={() => handleDelateTask(index) }>Eliminar</button>

      </li>

      ))}
    </ul>

  </div>
    
  );
  
}

export default App
