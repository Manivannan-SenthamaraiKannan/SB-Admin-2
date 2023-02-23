import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Dashboard from "../src/Components/Dashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path ="/Dashboard"><Dashboard /></Route>
      </div>
    </Router>
  );
}

export default App;
