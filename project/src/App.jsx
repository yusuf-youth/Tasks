import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Notes from "./components/Notes";
import TaskList from "./components/TaskList";
import { useAppContext } from "./hooks/useAppContext";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  useDarkMode();

  return (
    <div className="App container">
      <Header />
      <Notes />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
