import { useContext } from "react";
import Task from "./Task";
import { AppContext } from "../context/AppContext";

function TaskList() {
  const { isDarkMode, tasks } = useContext(AppContext);

  if (!tasks || tasks.length === 0) {
    return (
      <div className={`no-tasks${isDarkMode ? " no-tasks--dark" : ""}`}>
        No Tasks
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(({ id, text }, index) => {
        const isLast = index === tasks.length - 1;

        return (
          <li key={id} className="task-list__item">
            <Task id={id} text={text} />
            {!isLast && <hr className={`hr${isDarkMode ? " hr--dark" : ""}`} />}
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
