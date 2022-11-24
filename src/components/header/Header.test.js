import {render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../app/store";
import userEvent from "@testing-library/user-event";

describe("Header Component Test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  describe("Compnent Rendering Tests", () => {
    test("1. Ensure the top-level div renders", () => {
      const headerDiv = screen.getByTestId("Header__Header");
      expect(headerDiv).toBeInTheDocument;
    });
    test("2. Ensure the form with name searchForm renders", () => {
      const searchForm = screen.getByTestId("searchForm");
      expect(searchForm).toBeInTheDocument;
    });
    test("3. Ensure that input with name searchBar renders", () => {
      const searchBar = screen.getByTestId("searchBar");
      expect(searchBar).toBeInTheDocument;
    });
  });

  describe("Searchbar Functionality Tests", () => {
    test("1. Searchbar initially renders empty value w/ placeholder 'search for something'", () => {
      const searchBar = screen.getByTestId("searchBar");
      expect(searchBar.value).toBe("");
      expect(searchBar.placeholder).toBe("search for something");
    });
    test("2. On entering a 'searchValue', the value updates to 'searchValue'", () => {
      const searchBar = screen.getByTestId("searchBar");
      userEvent.type(searchBar, "searchValue");
      expect(searchBar.value).toBe("searchValue");
    });
  });
});
