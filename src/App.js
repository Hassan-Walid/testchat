import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import './App.css';
import Write from "./write";
import Read from "./read";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Write></Write>}/>
        <Route path="/write" element={<Write></Write>}/>
        <Route path="/read" element={<Read></Read>}/>


      </Routes>
     </Router>
    </div>
  );
}

export default App;
