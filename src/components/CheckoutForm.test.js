import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  // ========== ARRANGE (render the form)
  render(<CheckoutForm />);

  // ========== ACT (user types in all fields and clicks submit)
  // Set up test inputs
  const testInputs = {
    "First Name": "Ulfric",
    "Last Name": "Stormcloak",
    Address: "Palace of the Kings",
    City: "Windhelm",
    State: "Eastmarch",
    Zip: "02011",
  };
  const testKeys = Object.keys(testInputs);
  const testValues = Object.values(testInputs);
  // Select all text inputs
  const textFields = [];
  testKeys.forEach((key) => {
    textFields.push(screen.getByLabelText(`${key}:`));
  });
  // Select the submit button
  const checkoutElements = screen.getAllByText(/checkout/i);
  const submitButton = checkoutElements[checkoutElements.length - 1];
  // Simulate user interactions
  textFields.forEach((input, index) => {
    userEvent.type(input, testValues[index]);
  });
  userEvent.click(submitButton);

  // ========== ASSERT (is the success message w/ user's values on screen?)
  await waitFor(() => {
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();

    testValues.forEach((userInput) => {
      const renderedInput = screen.getByText(userInput, { exact: false });
      expect(renderedInput).toBeInTheDocument();
    });
  });
});
