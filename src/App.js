import "./App.css";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import  MainPage  from "./Pages/MainPage";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="mainPage" element={<MainPage />} />
        
        </Routes>
    </div>
  );
}

export default App;
