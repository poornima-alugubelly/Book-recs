import React from "react";
import "./styles.css";
import { useState } from "react";
document.body.classList.add("background-red");

const bookDB = {
  Mystery: [
    {
      name: "The devotion of suspect X",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "The greatest detective story of 21st century. A thrilling cat and mouse chase "
    },
    {
      name: "Gone Girl",
      rating: "⭐⭐⭐⭐",
      Description: "An amazing thriller with a good plot-twist"
    },
    {
      name: "Sherlock Holmes series",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "It's elementary,dear Watson. The original suave detective series"
    }
  ],

  Non_fiction: [
    {
      name: "When Breath becomes air",
      rating: "⭐⭐⭐⭐⭐",
      Description: "An inspiring book which teaches that every breath counts"
    },
    {
      name: "Can't hurt me",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "An autobiography which teaches that tough it out when the going gets tough"
    },
    {
      name: "Never split the difference",
      rating: "⭐⭐⭐⭐⭐",
      Description: "Good for learning negotiation"
    }
  ],
  classics: [
    {
      name: "The picture of Dorian gray",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "Stylish English horror.Deals with themes like morality and beauty"
    },
    {
      name: "Oliver Twist",
      rating: "⭐⭐⭐⭐",
      Description:
        "Best of Charles Dickens. Story of an Orphan names Oliver Twist"
    },
    {
      name: "Pride and Prejudice",
      rating: "⭐⭐⭐⭐⭐",
      Description: "Best of Victorian Romance. Read it for Mr.Darcy"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Mystery");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 class="header"> 📚 Book recs </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            class="button"
            style={{ color: "white" }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li class="rec" key={book.name}>
              {" "}
              <div style={{ fontSize: "larger", color: "white" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div> {book.Description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
