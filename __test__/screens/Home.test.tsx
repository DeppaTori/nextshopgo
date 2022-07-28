import { render, screen } from "@testing-library/react-native";
import App from "../../App";
import Home from "../../screens/Home";

describe("Home", () => {
  it("renders welcome text", () => {
    render(<Home />);
    expect(screen.getByText(/welcome/i)).not.toBeNull();
  });
});
