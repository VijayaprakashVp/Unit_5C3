import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { BooksContextProvider } from "./Contexts/BooksContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <BooksContextProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </BooksContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root"),
);
