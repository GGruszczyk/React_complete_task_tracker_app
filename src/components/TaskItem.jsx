import "./TaskItem.css"
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai"
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs"

const TaskItem = ({ task, deleteItemById, taskCompletion }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    taskCompletion(task.id, !isChecked)
  }

  useEffect(() => {
    setIsChecked(task.completed)
  }, [task.completed, isChecked])

  return <div className="task-tracker-item-container">
    <div className="task-tracker-item">{task.text}</div>
    <span onClick={handleCheckboxChange} className="checkmark">
      {
        !isChecked ? <BsCheckSquare className="icon" /> 
               : <BsCheckSquareFill className="icon" fill="#2ecc71" />
      
      }
    </span>
    <button onClick={() => deleteItemById(task.id)} className="task-tracker-item-del">
        <AiFillDelete className="icon" fill="red " />
    </button>
  </div>
}

export default TaskItem