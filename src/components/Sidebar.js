import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState("");
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query, $options: "i" },
    });

    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} alt="Search" />
        </button>
      </form>

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
