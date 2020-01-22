import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Backdrop from ".";

describe("<Backdrop />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Backdrop visible={false} />);

    expect(wrapper).toExist();
  });

  it("test visible prop", () => {
    const wrapper = mount(<Backdrop visible />);

    expect(wrapper.prop("visible")).toBe(true);
  });

  test("test hover css with type no page", () => {
    const tree = renderer.create(<Backdrop visible />).toJSON();
    expect(tree).toHaveStyleRule("display", "block");

    const tree2 = renderer.create(<Backdrop />).toJSON();
    expect(tree2).toHaveStyleRule("display", "none");
  });

  it("accepts id", () => {
    const wrapper = mount(
      <Backdrop
        visible={false}
        id="testId"
        className="test"
        style={{ color: "red" }}
      />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
