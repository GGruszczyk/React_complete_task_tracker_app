import "./TaskForm.css"
import React, { useEffect, useRef, useState } from "react"

const TaskForm = ({setTaskItems}) => {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus()
  }, [])

  const addTaskItem = () => {
    if(inputValue.trim() === "") return;
    setTaskItems(prev => {
      return [
        ...prev, 
        { 
          id: prev.length + 1, 
          text: inputValue, 
          completed: false 
        }
      ]
    })
    //clear the input field
    setInputValue("")
  }   

  return <div onKeyDown={(e) => e.key === "Enter" && addTaskItem()} className="add-task-container">
    <input ref={inputRef} value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="add task" className="add-task-input" />
    <button onClick={addTaskItem} className="add-task-btn">Add</button>
  </div>
}

export default TaskForm;