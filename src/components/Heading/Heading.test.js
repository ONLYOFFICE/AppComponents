import React from "react";
import { mount } from "enzyme";
import Heading from ".";

describe("<Heading />", () => {
  it("renders without error", () => {
    const wrapper = mount(
      <Heading level={4} title="Some title">
        Some text
      </Heading>
    );

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Heading id="testId" className="test" style={{ color: "red" }}>
        Some text
      </Heading>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
