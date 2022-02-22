import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Liverpool",
      email: "",
    },
    alert: {
      message: "",
      isSuccessful: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccessful: false });
    console.log(fields);
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((response) => {
        console.log(response);
        setAlert({
          message: "Property Added",
          isSuccessful: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server Error: Please try again later",
          isSuccessful: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add Property Page</h1>
      <div className="add-property__form">
        <form onSubmit={handleAddProperty}>
          <Alert message={alert.message} success={alert.isSuccessful} />

          <label className="add-property__title" htmlFor="title">
            Enter a Title <br />
            <input
              id="title"
              name="title"
              placeholder="eg. 2 bed flat"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="type">
            Property Type <br />
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>

          <label htmlFor="bedrooms">
            No of Bedrooms <br />
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              min="1"
              max="10"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="bathrooms">
            No of Bathrooms <br />
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              min="1"
              max="10"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="price">
            Price <br />
            <input
              className="add-property__price"
              id="price"
              name="price"
              type="number"
              placeholder="eg. £100,000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="city">
            City <br />
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Liverpool">Liverpool</option>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
            </select>
          </label>

          <label htmlFor="email">
            Email Address <br />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="joebloggs@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
