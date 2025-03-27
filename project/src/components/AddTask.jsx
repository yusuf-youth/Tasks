import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

function AddTask() {
  const { isDarkMode, setTasks } = useContext(AppContext);
  const [inputText, setInputText] = useState("");
  const buttonRef = useRef();

  function addTask() {
    if (!inputText) return;

    const generatedId = Math.random() * 100;
    setTasks((tasks) => [...tasks, { id: generatedId, text: inputText }]);
    setInputText("");
  }

  return (
    <form
      className={`add-task ${isDarkMode && "add-task--dark"}`}
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <input
        className="add-task__input"
        type="text"
        placeholder="Add a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        ref={buttonRef}
        className={`add-task__button ${!inputText && "is-disabled"}`}
        type="button"
        onClick={() => {
          addTask();
          buttonRef.current.classList.add("is-disabled");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </form>
  );
}

export default AddTask;
