import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "../../components/Header";


test("should render header", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // const result = renderer.getRenderOutput()
    // expect(result).toMatchSnapshot();
})