import React, { useContext } from "react";
import Task from "./Task";
import { AppContext } from "../context/AppContext";

function TaskList() {
  const { isDarkMode } = useContext(AppContext);
  const { tasks } = useContext(AppContext);

  function renderTasks(tasks) {
    return tasks.map(({ id, text }, index) => (
      <li key={id} className="task-list__item">
        {tasks.length - 1 !== index ? (
          <div>
            <Task key={id} id={id} text={text} />
            <hr className={`hr ${isDarkMode && "hr--dark"}`} />
          </div>
        ) : (
          <Task key={id} id={id} text={text} />
        )}
      </li>
    ));
  }

  return <ul className="task-list">{renderTasks(tasks)}</ul>;
}

export default TaskList;
