import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/appoloConfig";

describe("Check Homepage", () => {
  test("Check Home", () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  });

  test("check menu", async () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    const addSearch = screen.getByTestId("add-icon");
    expect(addSearch).toBeInTheDocument();
    const title = screen.getByTestId("title-navbar");
    expect(title).toBeInTheDocument();
    const iconSearch = screen.getByTestId("search-icon");
    expect(iconSearch).toBeInTheDocument();
    const inputSearch = screen.getByTestId("search-input");
    expect(inputSearch).toBeInTheDocument();
    const bottomnav = screen.getByTestId("bottom-nav");
    expect(bottomnav).toBeInTheDocument();
    const favoritenav = screen.getByTestId("favorite-contact");
    expect(favoritenav).toBeInTheDocument();
    fireEvent.click(favoritenav);
    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual("/favorite");
    });
    const regularnav = screen.getByTestId("regular-contact");
    expect(regularnav).toBeInTheDocument();
    fireEvent.click(regularnav);
    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual("/");
    });
    // fireEvent.change(inputSearch, { target: { value: "irvan" } });
    // expect(inputSearch.value).toBe("irvan");
  });
});
