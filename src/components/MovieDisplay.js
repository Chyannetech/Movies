// Import the React Library
import React from "react";

// Define a function that is the component, always make sure to declare the props parameter so you can use props in the component
// You can also destructure your props directly from the parameter list
const MovieDisplay = ({ movie }) => {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
};

// Export the component to use it in other files
export default MovieDisplay;