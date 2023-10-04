import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/About";
import Team from "./components/Team";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const deleteItemById = (id) => {
    const newTaskItems = taskItems.filter((item) => item.id !== id);
    setTaskItems(newTaskItems);
  };

  const taskCompletion = (taskId, isComplete) => {
    setTaskItems((prevTaskItems) => {
      return prevTaskItems.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: isComplete };
        }
        return task;
      });
    });
  };

  useEffect(() => {
    if (filterType === "completed") {
      const newTaskItems = taskItems.filter((task) => task.completed === true);
      setFilteredTasks(newTaskItems);
    } else if (filterType === "pending") {
      const newTaskItems = taskItems.filter((task) => task.completed === false);
      setFilteredTasks(newTaskItems);
    } else {
      setFilteredTasks(taskItems);
    }
  }, [filterType, taskItems]);

  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <Home
            taskItems={taskItems}
            setTaskItems={setTaskItems}
            filteredTasks={filteredTasks}
            setFilteredTasks={setFilteredTasks}
            filterType={filterType}
            setFilterType={setFilterType}
            deleteItemById={deleteItemById}
            taskCompletion={taskCompletion}
          />
        }
      />
      <Route path="about" element={<AboutPage />}>
        <Route index element={<Link to="/about/team">Meet the team</Link>} />
        <Route path="team" element={<Team />} />
      </Route>

      <Route
        path="*"
        element={
          <div>
            Page not found! <Link to="/">Go back Home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
