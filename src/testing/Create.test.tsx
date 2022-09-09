import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/appoloConfig";

describe("Check Homepage", () => {
  test("Check Nav to Create", async () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    const addSearch = screen.getByTestId("add-icon");
    fireEvent.click(addSearch);
    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual("/create");
    });
    const forms = screen.getByTestId("forms");
    expect(forms).toBeInTheDocument();
    const firstname = screen.getByTestId("input-firstname");
    expect(firstname).toBeInTheDocument();
    const lastname = screen.getByTestId("input-lastname");
    expect(lastname).toBeInTheDocument();
    const number1 = screen.getByTestId("input-number1");
    expect(number1).toBeInTheDocument();
    const plusnumber = screen.getByTestId("plus-number");
    expect(plusnumber).toBeInTheDocument();
    const savenumber = screen.getByTestId("save-number");
    expect(savenumber).toBeInTheDocument();
    const cancelnumber = screen.getByTestId("save-number");
    expect(cancelnumber).toBeInTheDocument();
    // action
    fireEvent.click(plusnumber);
    let minusnumber: HTMLElement;
    await waitFor(() => {
      minusnumber = screen.getByTestId("minus-number");
      expect(minusnumber).toBeInTheDocument();
    });
    minusnumber = screen.getByTestId("minus-number");
    fireEvent.click(minusnumber);
    await waitFor(() => {
      expect(minusnumber).toBeEmptyDOMElement();
    });
    fireEvent.change(firstname, { target: { value: "irvan" } });
    fireEvent.change(lastname, { target: { value: "irvan" } });
    // eslint-disable-next-line no-octal
    fireEvent.change(number1, { target: { value: Number("0828922882") } });
    fireEvent.click(savenumber);
    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual("/create");
    });
  });
});
