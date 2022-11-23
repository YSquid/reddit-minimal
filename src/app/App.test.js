import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"

describe("App top-level component tests", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("1. Ensure that the App, Header, and Body divs are in document", () => {
    const appDiv = screen.getByTestId("App");
    const headerDiv = screen.getByTestId("Header");
    const bodyDiv = screen.getByTestId("Body")
    expect(appDiv).toBeInTheDocument;
    expect(headerDiv).toBeInTheDocument;
    expect(bodyDiv).toBeInTheDocument;
  });
});
