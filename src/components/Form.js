import React from "react";

// Define a function that is the component, always make sure to declare the props parameter so you can use props in the component
const Form = (props) => {
    //State to hold the data of our form
    const [formData, setFormData] = React.useState({
      searchterm: "",
    });
  
    //handleChange - updates formData when typing into form
    const handleChange = (event) => {
      //use the event object to detect key and value to update
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      //prevent page from refreshing on form submission
      event.preventDefault();
      //pass the search term to moviesearch prop, which is apps getMovie function
      props.moviesearch(formData.searchterm);
    };
  
    //The component must return some JSX
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  };
  
  // Export the component to use it in other files
  export default Form;