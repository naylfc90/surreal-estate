import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
    },
  };

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing", [])
      .then(({ data }) => setProperties(data))
      .catch((error) => {
        setAlert({
          message: "No Properties Found",
        });
        return error;
      });
  });

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <>
      <Sidebar />
      <h1>Properties Page</h1>
      <Alert message={alert.message} />
      {!alert.message && (
        <div className="property-card__outer">
          {properties.map((property) => (
            <div className="property-card">
              <PropertyCard key={property.id} {...property} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Properties;
