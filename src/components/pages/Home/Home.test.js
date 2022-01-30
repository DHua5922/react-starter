import { shallow } from "enzyme";
import Home from ".";

describe("Testing Home component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
