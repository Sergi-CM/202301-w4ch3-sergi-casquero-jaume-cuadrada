import { screen, render } from "@testing-library/react";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When rendered on the screen", () => {
    test("It should show a 'Calling...' message", () => {
      const message = "Calling...";
      render(<Info message={message} />);

      const info = screen.getByText("Calling...");

      expect(info).toBeInTheDocument();
    });
  });
});
