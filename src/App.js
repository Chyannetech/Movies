import React from "react";
import { useState } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form.js";

function App() {
  //Variable with apiKey
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = React.useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //Set the Movie state to the movie
    setMovie(data);
  };

  //This will run on the first render but not on subsquent renders
  React.useEffect(() => {
    getMovie("Clueless");
  }, []);

  // USE COMPONENTS IN APPs RETURNED JSX
  // Pass the getMovie function as a prop called moviesearch
  // Pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
