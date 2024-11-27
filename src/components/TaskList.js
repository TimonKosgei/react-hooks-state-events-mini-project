import React from "react";
import Task from "./Task"
function TaskList({tasks, deleteTask}) {
  const taskElements = tasks.map((task, index)=> {
    return(
      <Task index={index} key={index} task={task } text={task.text} category={task.category} deleteTask={deleteTask} />
    )
  })
  return (
    <div className="tasks">
      {taskElements}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
