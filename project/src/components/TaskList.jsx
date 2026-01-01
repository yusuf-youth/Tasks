import Task from "./Task";
import { useAppContext } from "../hooks/useAppContext";

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
          <li key={id} className="task-list__item">
            <Task id={id} text={text} />
            {isNotLast && (
              <hr className={`hr${isDarkMode ? " hr--dark" : ""}`} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
