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
    test("1. Ensure the top-level div renders", () => {
      const subredditsDiv = screen.getByTestId("Subreddits");
      expect(subredditsDiv).toBeInTheDocument;
    });
    test("2. Ensure the subreddits container renders", () => {
      const subredditsContainerDiv = screen.getByTestId("subredditsContainer");
      expect(subredditsContainerDiv).toBeInTheDocument;
    });
    test("3. Ensure subreddits container childElementCount is 11", () => {
      const subredditsContainerDiv = screen.getByTestId("subredditsContainer");
      expect(subredditsContainerDiv.childElementCount).toEqual(11);
    });
  });
  describe("Clicking subreddit updates activeSubreddit", () => {
    test("1. Javascript subreddit starts with className of subreddit", () => {
      const jsTitle = screen.getByTestId("r/javascript");
      expect(jsTitle.className).toEqual("subreddit");
    });
    test("2. Clicking javascript subreddit button updates its classname to subredditActive", async () => {
      const jsButton = screen.getByTestId("r/javascriptButton");
      expect(jsButton).toBeInTheDocument;
      userEvent.click(jsButton)
    });
  });
});
