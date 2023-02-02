import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When rendered in screen", () => {
    test("It should show a display", () => {
      render(<Display className="" />);

      const display = screen.getByTestId("1");

      expect(display).toBeInTheDocument();
    });
  });
});
