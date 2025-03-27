import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

function Task({ id, text }) {
  const { isDarkMode, tasks, setTasks } = useContext(AppContext);
  const [isTaskCompleted, setTaskCompleted] = useState(false);
  const [textareaValue, setTextAreaValue] = useState(
    tasks.find((task) => task.id === id).text
  );
  const textareaRef = useRef();

  function onClick() {
    setTaskCompleted((checked) => !checked);

    setTimeout(() => {
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }, 1200);
  }

  function onChange(e) {
    setTextAreaValue(e.target.value);
    adjustHeight();

    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          task.text = e.target.value;
        }

        return task;
      });
    });

    if (e.target.value === '') {
      setTimeout(() => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      }, 800);
    }
  }

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <div
      id={id}
      className={`task ${isDarkMode && "task--dark"} ${
        isTaskCompleted && "is-completed is-disabled"
      }`}
    >
      <button className="task__checkmark" onClick={onClick}>
        <input className="task__checkbox" type="checkbox" />

        <svg
          className="task__tick"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6L3.91667 9L9 1"
            stroke="#575767"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <textarea
        className={`task__textarea `}
        ref={textareaRef}
        rows={1}
        value={textareaValue}
        onChange={onChange}
      >
        {text}
      </textarea>
    </div>
  );
}

export default Task;
