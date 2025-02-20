import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from './components/Hero.jsx';


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Hero />} />
     
      </Routes>
    </div>
  );
}

export default App;
