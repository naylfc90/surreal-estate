import React from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    title: "",
  };
  return (
    <div className="AddProperty">
      <h1>Add Property Page</h1>
      <form>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
