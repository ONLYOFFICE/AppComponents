import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Scrollbar from ".";

describe("<Scrollbar />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Scrollbar>Some content</Scrollbar>);

    expect(wrapper).toExist();
  });

  it("renders without size", () => {
    const wrapper = mount(<Scrollbar size={null}>Some content</Scrollbar>);

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

  test("svg text style test", () => {
    const tree = renderer.create(<Scrollbar color="purple" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "purple", {
      modifier: ".nav-thumb-vertical"
    });
  });
});
//nav-thumb-horizontal