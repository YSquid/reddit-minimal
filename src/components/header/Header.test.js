import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("Header Component Test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
  describe("Compnent Rendering Tests", () => {
    test("1. Ensure the top-level div renders", () => {});
    test("2. Ensure the form with name searchForm renders", () => {});
    test("3. Ensure that input with name searchBar renders", () => {});
  });

  describe("Searchbar Functionality Tests", () => {});
});
