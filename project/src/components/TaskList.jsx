import Task from "./Task";
import { useAppContext } from "../hooks/useAppContext";
import Divider from "./Divider";
import { Fragment } from "react";

function TaskList() {
  const { isDarkMode, tasks } = useAppContext();

  if (!tasks || tasks.length === 0) {
    return (
      <div className={`no-tasks${isDarkMode ? " no-tasks--dark" : ""}`}>
        No Tasks
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(({ id, text }) => {
        return (
          <Fragment key={id}>
            <li className="task-list__item">
              <Task id={id} text={text} />
            </li>
            <Divider offsetLeft />
          </Fragment>
        );
      })}
    </ul>
  );
}

export default TaskList;
