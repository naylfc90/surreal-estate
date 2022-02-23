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
      .then(({ data }) => {
        console.log({ data });
        setProperties(data);
      })
      .catch((error) => console.error(error));
  }, [search]);

  /* eslint no-underscore-dangle: 0 */
  return (
    <>
      <Sidebar />
      <Alert message={alert.message} />
      {!alert.message && (
        <div className="property-card__container">
          {properties.map((property) => (
            <div className="property-card">
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                bathrooms={parseInt(property.bathrooms, 10)}
                bedrooms={parseInt(property.bedrooms, 10)}
                price={parseInt(property.price, 10)}
                city={property.city}
                email={property.email}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Properties;
