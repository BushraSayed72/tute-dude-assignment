import './App.css';
import Navbar from './Components/Navbar';
import Screen2 from './Pages/Screen2';
import Screen from './Pages/Screen';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar/>
    
    <Routes>
    <Route path="/" element={<Screen/>} />
    <Route path="/Screen2" element={<Screen2/>} />
    </Routes>
      
    </div>
  );
}

export default App;
