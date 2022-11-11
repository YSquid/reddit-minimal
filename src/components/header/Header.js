import React, { useState } from "react";
import "./Header.css";
import { FcReddit, FcSearch } from "react-icons/fc";
import { setSearchTerm, filterPosts } from "../posts/redditSlice";
import { useDispatch } from "react-redux";

function Header() {
  //local state stores the search term - will be dispatched to store on submit
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    e.preventDefault();
    setLocalSearchTerm(e.target.value);
  };

  const handleClear = (e) => {
    if (e.target.value === '') {
      dispatch(setSearchTerm(e.target.value))
    }
  }


  //placeholder function for the submit action (in reality will dispatch action to filter the posts slice)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPosts(localSearchTerm))
    dispatch(setSearchTerm(localSearchTerm))
  };


  return (
    <div className="Header">
      <h1 id="mainLogo">
        <FcReddit />
        RedditMinimal
      </h1>
      <form id="searchForm" role="search" onSubmit={handleSearchSubmit}>
        <input
          id="searchBar"
          type="search"
          placeholder="search for something"
          onChange={handleSearchChange}
          onInput={handleClear}
          value={localSearchTerm}
        />
        <button id="searchIcon">
          <FcSearch />
        </button>
      </form>
    </div>
  );
}

export default Header;
