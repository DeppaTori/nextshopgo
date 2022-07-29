import { server } from "./mocks/server";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
