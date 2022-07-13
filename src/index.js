import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { NotesProvider } from "./Context/NoteContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NotesProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
      </NotesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
