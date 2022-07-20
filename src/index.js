import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { NotesProvider } from "./Context/NoteContext";
import {FilterProvider} from "./Context/FilterContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      < FilterProvider>
      <NotesProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
        </NotesProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
