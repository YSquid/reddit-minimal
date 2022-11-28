import React, { useState } from "react";
import "./Header.css";
import {BsReddit} from 'react-icons/bs'
import { HiOutlineSearch } from "react-icons/hi";
import { setSearchTerm, filterPosts, selectTheme, updateTheme } from "../posts/redditSlice";
import { useDispatch, useSelector } from "react-redux";

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
    dispatch(filterPosts(localSearchTerm));
    dispatch(setSearchTerm(localSearchTerm));
  };

  //handleClear function that runs on 'onInput'
  //only does something if the event target value is empty string (i.e. the input is cleared)
  //in that case, it dispatches the action to set searchTerm in redditSlice to ''
  const handleClear = (e) => {
    if (e.target.value === "") {
      dispatch(setSearchTerm(e.target.value));
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(updateTheme('dark'))
    } else {
      dispatch(updateTheme('light'))
    }
  }

  const theme = useSelector(selectTheme)

  return (
    <div className={theme === 'light' ? 'Header' : 'Header-Dark'} data-testid="Header__Header">
      <button className="toggleTheme" onClick={toggleTheme}>ToggleTheme</button>
      <h1 id="mainLogo">
        {
        theme === 'light' ? <BsReddit id="redditLogo" /> : <BsReddit id='redditLogo-Dark'/>
        }
        <p>
          <span id="orangeReddit">Reddit</span>Minimal
        </p>
      </h1>
      <form
        id="searchForm"
        name="searchForm"
        role="form"
        onSubmit={handleSearchSubmit}
        data-testid="searchForm"
      >
        <input
          id="searchBar"
          name="searchBar"
          type="search"
          data-testid="searchBar"
          placeholder="search for something"
          onChange={handleSearchChange}
          onInput={handleClear}
          value={localSearchTerm}
        />
        <button id={theme === 'light' ? 'searchIcon' : 'searchIcon-Dark'} aria-label="search button">
          <HiOutlineSearch />
        </button>
      </form>
    </div>
  );
}

export default Header;
