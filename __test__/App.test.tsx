import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
  it("renders home", () => {
    render(<App />);
    expect(screen.getByText(/welcome/i)).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
    const btn = screen.getByRole("button");
    fireEvent.press(btn);
    expect(screen.getByText(/detail page/i)).toBeTruthy();
  });
});
