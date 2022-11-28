import "./App.css";
import React from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Subreddits from "../components/subreddits/Subreddits";
import {useSelector} from 'react-redux'
import {selectTheme} from '../components/posts/redditSlice'

function App() {

  const theme = useSelector(selectTheme)
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className={theme === 'light' ? 'Body' : 'Body-Dark'}>
        <Posts />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
