import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { TickIcon } from "../script/icons";

function Task({ id, text }) {
  const { isDarkMode, deleteTask, editTask } = useAppContext();
  const [isTaskCompleted, setTaskCompleted] = useState(false);
  const [textareaValue, setTextAreaValue] = useState(text);
  const textareaRef = useRef();
  const deleteTimeoutRef = useRef(null);
  const modifierClass = `${isDarkMode ? "task--dark" : ""} ${
    isTaskCompleted ? "is-completed is-disabled" : ""
  }`;

  useEffect(() => {
    setTextAreaValue(text);
  }, [text]);

  useEffect(() => {
    adjustHeight();

    return () => {
      if (deleteTimeoutRef.current) {
        clearTimeout(deleteTimeoutRef.current);
      }
    };
  }, []);

  function onClick() {
    setTaskCompleted(true);

    deleteTimeoutRef.current = setTimeout(() => {
      deleteTask(id);
    }, 1200);
  }

  function onChange(e) {
    const newValue = e.target.value;

    setTextAreaValue(newValue);
    adjustHeight();
    editTask(id, newValue);

    if (newValue.trim() === "") {
      deleteTimeoutRef.current = setTimeout(() => {
        deleteTask(id);
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

  return (
    <div id={`task-${id}`} className={`task ${modifierClass}`}>
      <label className="task__checkmark" aria-label="Mark task completed">
        <input
          type="checkbox"
          checked={isTaskCompleted}
          onChange={onClick}
          className="task__checkbox"
        />
        <TickIcon className="task__tick" />
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
