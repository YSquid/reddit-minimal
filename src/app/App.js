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
    <div className={theme === 'light' ? 'App' : 'App-Dark'} data-testid="App__App">
      <div className="Header" data-testid="Header__App">
        <Header />
      </div>
      <div className={theme === 'light' ? 'Body' : 'Body-Dark'} data-testid="Body__App">
        <Posts />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
