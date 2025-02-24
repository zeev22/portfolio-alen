import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/hero" element={<Hero />}  />
      </Routes>
    </div>
  );
}

export default App;
