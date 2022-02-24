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
          className="search_input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search_submit-button">
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
      </Link>{" "}
      <br />
      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>{" "}
      <br />
      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Leeds" })}
      >
        Leeds
      </Link>{" "}
      <br />
      <Link
        className="sidebar-city__search"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>{" "}
      <br /> <br />
      <p>
        <b>Sort by</b>
      </p>
      <Link
        className="sidebar-price"
        to={buildQueryString("sort", { price: 1 })}
      >
        Price Ascending
      </Link>{" "}
      <br />
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
