import { render, screen } from "@testing-library/react";
import Subreddits from "./Subreddits";
import { Provider } from "react-redux";
import store from "../../app/store";
import userEvent from "@testing-library/user-event";

describe("Subreddit Component Tests ", () => {
  describe("Subreddits components render ", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Subreddits />
        </Provider>
      );
    });
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
      render(
        <Provider store={store}>
          <Subreddits />
        </Provider>
      );
      const jsTitle = screen.getByTestId("r/javascript");
      expect(jsTitle.className).toEqual("subreddit");
    });
    // test("2. Clicking javascript subreddit button updates its classname to subredditActive", async () => {
    //   const user = userEvent.setup()
    //   render(
    //     <Provider store={store}>
    //       <Subreddits />
    //     </Provider>
    //   );
    //   const jsButton = screen.getByTestId("r/javascriptButton");
    //   await user.click(jsButton).then(() => {
    //     const jsTitle = screen.getByTestId("r/javascript");
    //     expect(jsTitle.className).toEqual("subredditActive");
    //   })
    // });
  });
});
