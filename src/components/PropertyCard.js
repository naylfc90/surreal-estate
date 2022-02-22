import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = props;
  return (
    <div>
      <p>
        <b>{title}</b>
      </p>
      <p>
        {type} - {city}
      </p>
      <p>
        <FontAwesomeIcon className="icon" alt="Bedrooms" icon={faBed} />{" "}
        {bedrooms}
      </p>
      <p>
        <FontAwesomeIcon className="icon" alt="Bathrooms" icon={faShower} />{" "}
        {bathrooms}
      </p>
      <p>£{price}</p>
      <p className="property-card__email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${email}`}> Email</a>
      </p>
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
