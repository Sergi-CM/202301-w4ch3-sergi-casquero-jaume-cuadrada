import { screen, render } from "@testing-library/react";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When rendered in screen", () => {
    test("It should show a button with 'hang up' text in it", () => {
      const message = "hung up";
      render(<Action href="" className="" text={message} />);

      const action = screen.getByText("hung up");

      expect(action).toBeInTheDocument();
    });
  });
});
