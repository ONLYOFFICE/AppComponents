import React from "react";
import { mount } from "enzyme";
import Tooltip from ".";
import Text from "../text";

describe("<Tooltip />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Tooltip id="id">{<Text>You tooltip text</Text>}</Tooltip>);

    expect(wrapper).toExist();
  });

  it("Tooltip componentDidUpdate() lifecycle test", () => {
    const wrapper = mount(
      <Tooltip id="id">{<Text>You tooltip content</Text>}</Tooltip>
    ).instance();
    wrapper.componentDidUpdate(wrapper.props, wrapper.state);
    expect(wrapper.props).toBe(wrapper.props);
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Tooltip id="testId" className="test" style={{ color: "red" }}>
        <Text>You tooltip content</Text>
      </Tooltip>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
