import { useContext, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Notes from "./components/Notes";
import TaskList from "./components/TaskList";
import { AppContext } from "./context/AppContext";

function App() {
  const { isDarkMode } = useContext(AppContext);

  useEffect(() => {
    document.body.classList.toggle("is-dark", isDarkMode);
  }, [isDarkMode]);

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
