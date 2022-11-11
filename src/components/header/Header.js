import React, { useState } from "react";
import "./Header.css";
import { FcReddit, FcSearch } from "react-icons/fc";
import { setSearchTerm, filterPosts } from "../posts/redditSlice";
import { useDispatch } from "react-redux";

function Header() {
  //local state stores the search term - will be dispatched to store on submit
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const dispatch = useDispatch();

  //stores my search term locally
  const handleSearchChange = (e) => {
    e.preventDefault();
    setLocalSearchTerm(e.target.value);
  };

  //on submitting search, dispatch filerPosts which returns posts who's title include the searchTerm
  //These filtered posts have their own peice of state in the redditSlice
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPosts(localSearchTerm))
    dispatch(setSearchTerm(localSearchTerm))
  };
  
  //handleClear function that runs on 'onInput'
  //only does something if the event target value is empty string (i.e. the input is cleared)
  //in that case, it dispatches the action to set searchTerm in redditSlice to ''
  const handleClear = (e) => {
    if (e.target.value === '') {
      dispatch(setSearchTerm(e.target.value))
    }
  }


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
