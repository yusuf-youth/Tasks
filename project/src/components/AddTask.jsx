import { useContext, useState } from "react";
import { ACTIONS, AppContext } from "../context/AppContext";

function AddTask() {
  const { isDarkMode, dispatchTasks } = useContext(AppContext);
  const [inputText, setInputText] = useState("");

  function addTask() {
    const trimmedText = inputText.trim();
    if (!trimmedText) return;

    const generatedId = Date.now();
    dispatchTasks({
      type: ACTIONS.ADD,
      payload: { id: generatedId, text: trimmedText },
    });
    setInputText("");
  }

  return (
    <form
      className={`add-task ${isDarkMode ? "add-task--dark" : ""}`}
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
        aria-label="Task input"
      />

      <button
        className={`add-task__button ${!inputText.trim() ? "is-disabled" : ""}`}
        type="submit"
        disabled={!inputText.trim()}
        aria-label="Add task"
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
