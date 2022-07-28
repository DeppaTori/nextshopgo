import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react-native";
import App from "../../App";
import Home from "../../screens/Home";
import "cross-fetch/polyfill";
import { create } from "react-test-renderer";

describe("Home", () => {
  it("renders welcome text", () => {
    render(<Home />);
    expect(screen.getByText(/welcome/i)).not.toBeNull();
  });
  it("renders hello message from API", async () => {
    render(<Home />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading-id"));

    expect(screen.queryByText(/hlohalo/i)).not.toBeNull();
  });
});
