import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = props;
  return (
    <div className="property-card">
      <div className="property-card__item">
        <b>{title}</b>
      </div>
      <div className="property-card__item">Property Type: {type}</div>
      <div className="property-card__item">
        <FontAwesomeIcon className="icon" icon={faBed} /> {bedrooms}
      </div>
      <div className="property-card__item">
        <FontAwesomeIcon className="icon" icon={faShower} /> {bathrooms}
      </div>
      <div className="property-card__item">£{price}</div>
      <div className="property-card__item">City: {city}</div>
      <div className="property-card__email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${email}`}> Email</a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
