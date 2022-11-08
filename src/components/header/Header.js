import React, { useState } from "react";
import "./Header.css";
import { FcReddit, FcSearch } from "react-icons/fc";

function Header() {
  //local state stores the search term - will be dispatched to store on submit
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  //placeholder function for the submit action (in reality will dispatch action to filter the posts slice)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for ${searchTerm}`);
  };

  return (
    <div className="Header">
      <h1 id='mainLogo'>
        <FcReddit />
        RedditMinimal
      </h1>
      <form id="searchForm" role="search" onSubmit={handleSearchSubmit}>
        <input
          id='searchBar'
          type="search"
          placeholder="search for something"
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <button id='searchIcon'>
          <FcSearch />
        </button>
      </form>
    </div>
  );
}

export default Header;
