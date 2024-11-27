import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  
  const [allTasks, setAllTasks]  =useState(TASKS)
  const [tasks, setTasks]  =  useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
function onTaskFormSubmit(newTask){
  setAllTasks((prev) => [...prev,newTask])
  setTasks((prev) => [...prev,newTask])
}


function filterTasks(categ){
  if(categ === "All"){
    setTasks(allTasks)
  }else{
    setTasks(allTasks.filter((t)=>t.category === categ))
  }
}

  function deleteTask(indexToBeDeleted){
    console.log(indexToBeDeleted)
    setTasks((prev)=> prev.filter((t,index)=> index !== indexToBeDeleted ))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterTasks={filterTasks}/>
      <NewTaskForm categories={categories}  onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList  tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
