import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Notes from "./components/Notes";
import TaskList from "./components/TaskList";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App container">
        <Header />
        <Notes />
        <TaskList />
        <AddTask />
      </div>
    </AppContextProvider>
  );
}

export default App;
