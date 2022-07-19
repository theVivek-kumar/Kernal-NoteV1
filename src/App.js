import "./App.css";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import  MainPage  from "./Pages/MainPage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignInj from "./Pages/SignIn";
import Mockman from 'mockman-js';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/SignIn" element={<SignInj />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
