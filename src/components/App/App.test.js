import { shallow } from "enzyme";
import App from ".";

describe("Testing App component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
