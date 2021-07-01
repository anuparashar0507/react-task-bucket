
import './App.css';
import TaskList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {


  return (
    <div className="App">
    <TaskList />
    <div className = "footer text-center">
        <h6 className="title">Created Using React beautiful dnd by Anupam Parashar</h6>
    </div>
  </div>
  );
}

export default App;