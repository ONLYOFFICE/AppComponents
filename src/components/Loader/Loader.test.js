import React from "react";
import { mount } from "enzyme";
import Loader from ".";

describe("<Loader />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Loader />);

    expect(wrapper).toExist();
  });

  it("dual-ring type", () => {
    const wrapper = mount(<Loader type="dual-ring" />);

    expect(wrapper.prop("type")).toEqual("dual-ring");
  });

  it("accepts id", () => {
    const wrapper = mount(
      <Loader id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
