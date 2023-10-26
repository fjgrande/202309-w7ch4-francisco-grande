import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it receives a text inside the header'", () => {
    test("Then it should show Add a sloth in the header", () => {
      const expectedText = "Add a Sloth";

      render(<App />);
      const header = screen.getByRole("heading", { name: expectedText });

      expect(header).toBeInTheDocument();
    });
  });
});
