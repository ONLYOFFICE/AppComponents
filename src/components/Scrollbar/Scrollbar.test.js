import React from "react";
import { mount } from "enzyme";
import Scrollbar from ".";

describe("<Scrollbar />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Scrollbar>Some content</Scrollbar>);

    expect(wrapper).toExist();
  });

  it("renders without stype", () => {
    const wrapper = mount(<Scrollbar stype={null}>Some content</Scrollbar>);

    expect(wrapper).toExist();
  });

  it("accepts id", () => {
    const wrapper = mount(
      <Scrollbar id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
