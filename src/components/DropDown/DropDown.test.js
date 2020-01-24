import React from "react";
import { mount, shallow, unmount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import DropDown from ".";

describe("<DropDown />", () => {
  it("rendered without error", () => {
    const wrapper = mount(<DropDown />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <DropDown id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  test("test maxHeight prop styles", () => {
    const tree = renderer
      .create(
        <DropDown maxHeight={100}>
          <div label="1"></div>
          <div label="2"></div>
          <div label="3"></div>
        </DropDown>
      )
      .toJSON();

    expect(tree).toHaveStyleRule("max-height", "100px");
    expect(tree).toHaveStyleRule("overflow-y", "auto");
  });

  test("test manualWidth prop styles", () => {
    const tree = renderer.create(<DropDown manualWidth="100px" />).toJSON();

    expect(tree).toHaveStyleRule("width", "100px");
  });

  test("test directionY props styles", () => {
    const tree = renderer.create(<DropDown directionY="top" />).toJSON();
    expect(tree).toHaveStyleRule("bottom", "100%");

    const tree2 = renderer
      .create(<DropDown manualY="10px" directionY="top" />)
      .toJSON();
    expect(tree2).toHaveStyleRule("bottom", "10px");

    const tree3 = renderer.create(<DropDown directionY="bottom" />).toJSON();
    expect(tree3).toHaveStyleRule("top", "100%");

    const tree4 = renderer
      .create(<DropDown manualY="10px" directionY="bottom" />)
      .toJSON();
    expect(tree4).toHaveStyleRule("top", "10px");
  });

  test("test directionX props styles", () => {
    const tree = renderer
      .create(<DropDown directionX="right" manualX="20px" />)
      .toJSON();
    expect(tree).toHaveStyleRule("right", "20px");

    const tree1 = renderer.create(<DropDown directionX="right" />).toJSON();
    expect(tree1).toHaveStyleRule("right", "0px");

    const tree2 = renderer
      .create(<DropDown directionX="left" manualX="10px" />)
      .toJSON();
    expect(tree2).toHaveStyleRule("left", "10px");

    const tree3 = renderer.create(<DropDown directionX="left" />).toJSON();
    expect(tree3).toHaveStyleRule("left", "0px");
  });

  test("test open props styles", () => {
    const tree = renderer.create(<DropDown open />).toJSON();
    expect(tree).toHaveStyleRule("display", "block");

    const tree2 = renderer.create(<DropDown />).toJSON();
    expect(tree2).toHaveStyleRule("display", "none");
  });

  it("open prop", () => {
    const wrapper = mount(<DropDown open />);
    expect(wrapper.prop("open")).toEqual(true);
  });

  it("directionX right", () => {
    const wrapper = mount(<DropDown directionX="right" />);
    expect(wrapper.prop("directionX")).toEqual("right");
  });

  it("directionX right manualX", () => {
    const wrapper = mount(<DropDown directionX="right" manualX="100px" />);
    expect(wrapper.prop("directionX")).toEqual("right");
  });

  it("directionY top", () => {
    const wrapper = mount(<DropDown directionY="top" />);
    expect(wrapper.prop("directionY")).toEqual("top");
  });

  it("directionY top manualY", () => {
    const wrapper = mount(<DropDown directionY="top" manualY="100%" />);
    expect(wrapper.prop("directionY")).toEqual("top");
  });

  it("manualY", () => {
    const wrapper = mount(<DropDown manualY="100%" />);

    expect(wrapper.prop("manualY")).toEqual("100%");
  });

  it("manualX", () => {
    const wrapper = mount(<DropDown manualX="100%" />);

    expect(wrapper.prop("manualX")).toEqual("100%");
  });

  it("render with children", () => {
    const wrapper = mount(
      <DropDown>
        <div label="1"></div>
      </DropDown>
    );
    expect(wrapper.children()).toHaveLength(1);
  });
});
