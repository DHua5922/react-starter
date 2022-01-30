import { shallow } from "enzyme";
import Page from ".";

describe("Testing Page component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
