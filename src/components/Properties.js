import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const validProps = {
    title: "2 Bedroom Flat",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 1,
    price: 100000,
    city: "Liverpool",
    email: "nay@horne.com",
  };

  return (
    <div>
      <h1>Properties Page</h1>
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    </div>
  );

  // return (
  //   <div className="property-card">
  //     {properties.map((property) => (
  //       <PropertyCard
  //         title={property.title}
  //         type={property.type}
  //         bedrooms={property.bedrooms}
  //         bathrooms={property.bathrooms}
  //         price={property.price}
  //         city={property.city}
  //         email={property.email}
  //       />
  //     ))}
  //   </div>
  // );
};

export default Properties;
