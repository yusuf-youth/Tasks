import { useState } from "react";
import { BoxIcon } from "../script/icons";
import { useAppContext } from "../hooks/useAppContext";

function AddTask() {
  const { isDarkMode, addTask } = useAppContext();
  const [inputText, setInputText] = useState("");
  const isEmptyField = !inputText.trim();

  function onSubmit() {
    if (isEmptyField) return;

    const id = Date.now();
    const text = inputText.trim();

    addTask(id, text);
    setInputText("");
  }

  function onChange(e) {
    setInputText(e.target.value);
  }

  return (
    <form
      className={`add-task ${isDarkMode ? "add-task--dark" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        className="add-task__input"
        type="text"
        placeholder="Add a task..."
        value={inputText}
        onChange={onChange}
        aria-label="Task input"
      />

      <button
        className={`add-task__button ${isEmptyField ? "is-disabled" : ""}`}
        type="submit"
        disabled={isEmptyField}
        aria-label="Add task"
      >
        <BoxIcon />
      </button>
    </form>
  );
}

export default AddTask;
