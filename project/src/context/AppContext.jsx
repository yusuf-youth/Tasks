import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { ACTIONS, STORAGE_KEYS } from "../script/constant";

function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.DELETE:
      return state.filter((task) => task.id !== action.payload);
    case ACTIONS.EDIT:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );
    default:
      return state;
  }
}

const getFromStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export const AppContext = createContext({
  isDarkMode: false,
  setDarkMode: () => {},
  tasks: [],
  dispatchTasks: () => {},
  notes: "",
  setNotes: () => {},
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
      dispatchTasks,
      notes,
      setNotes,
    }),
    [isDarkMode, tasks, notes]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
