import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useContext } from "react";
import { BooksContext } from "../../Contexts/BooksContext";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const [list, setList] = useState([]);
  // const [show, setShow] = useState([]);
  // // console.log("list", list);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/Books").then(({ data }) => {
  //     setList([...data]);
  //     setShow([...data]);
  //   });
  // }, []);

  const { show } = useContext(BooksContext);

  const Main = styled.div`
    /* Apply some responsive styling to children */
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(4, 24%);
    grid-gap: 2%;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}

        {show.map((e) => {
          return (
            <div style={{ border: "1px solid black" }}>
              <img src={e.image} alt="" style={{ width: "100%" }} />
              <p>{e.Title}</p>
              <p>{e.Author}</p>
              <p>{e.Price}</p>
              <p>{e.Description}</p>
              <p>{e.ISBN}</p>
              <ul>
                {e.reviews.map((f) => {
                  return <li>{f}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </Main>
    </div>
  );
};
