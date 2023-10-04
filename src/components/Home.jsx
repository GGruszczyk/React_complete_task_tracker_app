import React from "react"
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const Home = ({
  taskItems,
  setTaskItems,
  filteredTasks,
  setFilteredTasks,
  filterType,
  setFilterType,
  deleteItemById,
  taskCompletion,
}) => {
    return <>
    {/* TaskForm */}
    <TaskForm setTaskItems={setTaskItems} />
    {/* TasksContainer */}
    <div className="task-tracker-container">
      {/*info bar */}
      <div className="task-tracker-info-bar">
        <span>{taskItems.length} items</span>
        <span
          style={{ backgroundColor: filterType === "all" && "#dcdcdc" }}
          onClick={() => setFilterType("all")}
        >
          all
        </span>
        <span
          style={{
            backgroundColor: filterType === "completed" && "#dcdcdc",
          }}
          onClick={() => setFilterType("completed")}
        >
          completed
        </span>
        <span
          style={{
            backgroundColor: filterType === "pending" && "#dcdcdc",
          }}
          onClick={() => setFilterType("pending")}
        >
          pending
        </span>
      </div>
      {/* TaskItem */}
      {filteredTasks.map((task, i) => {
        return (
          <TaskItem
            taskCompletion={taskCompletion}
            key={i}
            task={task}
            deleteItemById={deleteItemById}
          />
        );
      })}
    </div>
  </>
}

export default Home;