import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BooksContextProvider } from "./Contexts/BooksContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
