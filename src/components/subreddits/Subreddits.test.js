import { render, screen } from "@testing-library/react";
import Subreddits from "./Subreddits";
import { Provider } from "react-redux";
import store from "../../app/store";
import userEvent from "@testing-library/user-event";

describe("Subreddit Component Tests ", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Subreddits />
      </Provider>
    );
  });

  describe("Subreddits components render ", () => {
    test("1. Ensure the top-level div renders", () =>{
        
    })
  });
  describe("Clicking subreddit updates activeSubreddit", () => {});
});
