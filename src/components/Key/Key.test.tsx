import { screen, render } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When rendered on the screen with a content of '3'", () => {
    test("Then it should show a key with a number '3'", () => {
      const keyNumber = "3";
      render(<Key className="" content={keyNumber} />);

      const key = screen.getByText("3");

      expect(key).toBeInTheDocument();
    });
  });
});
