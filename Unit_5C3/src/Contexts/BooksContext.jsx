import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

// const [list, setList] = useState([]);
const [show, setShow] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8080/Books").then(({ data }) => {
    // setList([...data]);
    setShow([...data]);
  });
}, []);

export const BooksContextProvider = ({ children }) => {
  const handleChange = (value) => {};

  return (
    <BooksContext.Provider value={{ show }}>{children}</BooksContext.Provider>
  );
};
