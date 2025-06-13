import { useContext, useEffect, useRef, useState } from "react";
import { ACTIONS, AppContext } from "../context/AppContext";

function Task({ id, text }) {
  const { isDarkMode, dispatchTasks } = useContext(AppContext);
  const [isTaskCompleted, setTaskCompleted] = useState(false);
  const [textareaValue, setTextAreaValue] = useState(text);
  const textareaRef = useRef();
  const deleteTimeoutRef = useRef(null);

  useEffect(() => {
    setTextAreaValue(text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
    };
  }, []);

  function onClick() {
    setTaskCompleted(true);

    deleteTimeoutRef.current = setTimeout(() => {
      dispatchTasks({ type: ACTIONS.DELETE, payload: id });
    }, 1200);
  }

  function onChange(e) {
    const newValue = e.target.value;
    setTextAreaValue(newValue);
    adjustHeight();

    dispatchTasks({
      type: ACTIONS.EDIT,
      payload: { id, text: newValue },
    });

    if (newValue.trim() === "") {
      deleteTimeoutRef.current = setTimeout(() => {
        dispatchTasks({ type: ACTIONS.DELETE, payload: id });
      }, 800);
    }
  }

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <div
      id={`task-${id}`}
      className={`task ${isDarkMode ? "task--dark" : ""} ${
        isTaskCompleted ? "is-completed is-disabled" : ""
      }`}
    >
      <label className="task__checkmark" aria-label="Mark task completed">
        <input
          type="checkbox"
          checked={isTaskCompleted}
          onChange={onClick}
          className="task__checkbox"
        />
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
      </label>

      <textarea
        className="task__textarea"
        ref={textareaRef}
        rows={1}
        value={textareaValue}
        onChange={onChange}
        aria-label="Task text"
      />
    </div>
  );
}

export default Task;
