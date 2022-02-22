import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

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
        console.log(error);
        setAlert({
          message: "No Properties Found",
        });
      });
  });

  // const validProps = {
  //   title: "2 Bedroom Flat",
  //   type: "Flat",
  //   bedrooms: 2,
  //   bathrooms: 1,
  //   price: 100000,
  //   city: "Liverpool",
  //   email: "nay@horne.com",
  // };

  // return (
  //   <div>
  //     <h1>Properties Page</h1>
  //     <PropertyCard
  //       title={validProps.title}
  //       type={validProps.type}
  //       bedrooms={validProps.bedrooms}
  //       bathrooms={validProps.bathrooms}
  //       price={validProps.price}
  //       city={validProps.city}
  //       email={validProps.email}
  //     />
  //   </div>
  // );

  return (
    <>
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
