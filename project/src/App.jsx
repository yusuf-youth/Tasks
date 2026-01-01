import AddTask from "./components/AddTask";
import Divider from "./components/Divider";
import Header from "./components/Header";
import Notes from "./components/Notes";
import TaskList from "./components/TaskList";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  useDarkMode();

  return (
    <div className="App container">
      <Header />
      <Notes />
      <Divider offsetBottom />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
