import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../components/counter.js";

Enzyme.configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("is alive at app start", () => {
    let app = shallow(<Counter />);
    expect(app.find("form").exists()).toBeTruthy();
  });

  it("increases and decreases count when buttons are clicked", () => {
    let app = mount(<Counter />);
    let buttonUp = app.find(".positive");
    let buttonDown = app.find(".negative");
    buttonUp.simulate("click");
    expect(app.state("count")).toBe(1);
    buttonDown.simulate("click");
    expect(app.state("count")).toBe(0);
  });

  it('renders right', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
