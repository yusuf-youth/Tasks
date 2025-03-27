import { createContext, useEffect, useState } from "react";

const DARK_MODE = "DARK MODE";
const TASKS = "TASKS";
const NOTES = "NOTES";

export const AppContext = createContext({
  isDarkMode: null,
  setDarkMode: null,
  tasks: null,
  setTasks: null,
  notes: null,
  setNotes: null,
});

export function AppContextProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(() => {
    const isDarkMode = JSON.parse(localStorage.getItem(DARK_MODE));

    if (isDarkMode) return isDarkMode;
    else return false;
  });
  const [tasks, setTasks] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem(TASKS));

    if (tasks) return tasks;
    else return [{ id: 0, text: "A task item example" }];
  });
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem(NOTES));

    if (notes) return notes;
    else return "";
  });

  useEffect(() => {
    localStorage.setItem(DARK_MODE, JSON.stringify(isDarkMode));
    localStorage.setItem(TASKS, JSON.stringify(tasks));
    localStorage.setItem(NOTES, JSON.stringify(notes));
  }, [tasks, notes, isDarkMode]);

  const values = {
    isDarkMode,
    setDarkMode,
    tasks,
    setTasks,
    notes,
    setNotes,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
