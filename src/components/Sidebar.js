import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <p>
        <b>Filter by City</b>
      </p>
      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Liverpool" })}
      >
        Liverpool
      </Link>

      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>

      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Leeds" })}
      >
        Leeds
      </Link>

      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>

      <p>
        <b>Sort by</b>
      </p>
      <Link
        className="sidebar-price"
        to={buildQueryString("sort", { price: 1 })}
      >
        Price Ascending
      </Link>

      <Link
        className="sidebar-price"
        to={buildQueryString("sort", { price: -1 })}
      >
        Price Descending
      </Link>
    </div>
  );
};

export default Sidebar;
