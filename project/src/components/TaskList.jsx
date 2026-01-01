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
      {tasks.map(({ id, text }, index) => {
        const isNotLast = (index === tasks.length - 1) === false;

        return (
          <Fragment key={id}>
            <li key={id} className="task-list__item">
              <Task id={id} text={text} />
            </li>
            {isNotLast && <Divider offsetLeft />}
          </Fragment>
        );
      })}
    </ul>
  );
}

export default TaskList;
