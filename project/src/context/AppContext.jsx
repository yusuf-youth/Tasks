import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { ACTIONS, STORAGE_KEYS } from "../script/constant";
import { taskReducer } from "../reducer/taskReducer";
import { getFromStorage } from "../script/helpers";

export const AppContext = createContext({
  isDarkMode: false,
  setDarkMode: () => {},
  tasks: [],
  notes: "",
  setNotes: () => {},
  addTask: (id, text) => null,
  deleteTask: (id) => null,
  editTask: (id, text) => null,
});

export function AppContextProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(() =>
    getFromStorage(STORAGE_KEYS.DARK_MODE, false)
  );

  const [tasks, dispatchTasks] = useReducer(taskReducer, [], () =>
    getFromStorage(STORAGE_KEYS.TASKS, [{ id: 0, text: "A task item example" }])
  );

  const [notes, setNotes] = useState(() =>
    getFromStorage(STORAGE_KEYS.NOTES, "")
  );

  function addTask(id, text) {
    dispatchTasks({
      type: ACTIONS.ADD,
      payload: { id, text },
    });
  }
  function deleteTask(id) {
    dispatchTasks({ type: ACTIONS.DELETE, payload: id });
  }
  function editTask(id, text) {
    dispatchTasks({
      type: ACTIONS.EDIT,
      payload: { id, text },
    });
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDarkMode));
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  }, [isDarkMode, tasks, notes]);

  const contextValue = useMemo(
    () => ({
      isDarkMode,
      setDarkMode,
      tasks,
      notes,
      setNotes,
      addTask,
      deleteTask,
      editTask,
    }),
    [isDarkMode, tasks, notes]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
