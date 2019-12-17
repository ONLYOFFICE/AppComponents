import React from "react";
import { mount } from "enzyme";
import Text from ".";

describe("<Text />", () => {
  it("renders without error", () => {
    const wrapper = mount(
      <Text as="p" title="Some title">
        Some text
      </Text>
    );

    expect(wrapper).toExist();
  });

  it("test css props", () => {
    const wrapper = mount(
      <Text backgroundColor="#333" display="contents" tag="div">
        Some text
      </Text>
    );

    expect(wrapper.props().display).toEqual("contents");
    expect(wrapper.props().backgroundColor).toEqual("#333");
    expect(wrapper.props().tag).toEqual("div");
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Text id="testId" className="test" style={{ color: "red" }}>
        Some text
      </Text>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
