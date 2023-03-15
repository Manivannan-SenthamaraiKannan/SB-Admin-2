import './App.css'
import Dashboard from "./Components/Dashboard";
import Buttons from './Components/Dashboard/CustomComponents/Buttons'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        <Routes>
          <Route path="/buttons" element={<Buttons />}/>
        </Routes>
      </div >
    </Router>
  );
}

export default App;
