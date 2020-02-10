import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Avatar from ".";
import { Base } from "../../themes";

const baseProps = {
  size: "max",
  source: "",
  userName: "Demo User"
};

describe("<Avatar />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Avatar {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Avatar
        {...baseProps}
        id="testId"
        className="test"
        style={{ color: "red" }}
      />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("test avatar sizes", () => {
    const wrapper = mount(<Avatar {...baseProps} size="big" />);
    expect(wrapper.prop("size")).toEqual("big");

    const wrapper2 = mount(<Avatar {...baseProps} size="medium" />);
    expect(wrapper2.prop("size")).toEqual("medium");

    const wrapper3 = mount(<Avatar {...baseProps} size="small" />);
    expect(wrapper3.prop("size")).toEqual("small");

    const wrapper4 = mount(<Avatar {...baseProps} size="small" />);
    expect(wrapper4.prop("size")).toEqual("small");
  });

  test("test avatar sizes styles", () => {
    const tree = renderer.create(<Avatar {...baseProps} size="max" />).toJSON();

    expect(tree).toHaveStyleRule("width", Base.avatar.width.max);
    expect(tree).toHaveStyleRule("height", Base.avatar.height.max);

    const tree2 = renderer
      .create(<Avatar {...baseProps} size="big" />)
      .toJSON();

    expect(tree2).toHaveStyleRule("width", Base.avatar.width.big);
    expect(tree2).toHaveStyleRule("height", Base.avatar.height.big);

    const tree3 = renderer
      .create(<Avatar {...baseProps} size="medium" />)
      .toJSON();

    expect(tree3).toHaveStyleRule("width", Base.avatar.width.medium);
    expect(tree3).toHaveStyleRule("height", Base.avatar.height.medium);

    const tree4 = renderer
      .create(<Avatar {...baseProps} size="small" />)
      .toJSON();

    expect(tree4).toHaveStyleRule("width", Base.avatar.width.small);
    expect(tree4).toHaveStyleRule("height", Base.avatar.height.small);
  });

  test("test avatar background styles", () => {
    const tree = renderer.create(<Avatar source="" userName="User" />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.avatar.imageContainer.backgroundImage
    );

    const tree2 = renderer.create(<Avatar />).toJSON();
    expect(tree2).toHaveStyleRule(
      "background-color",
      Base.avatar.imageContainer.background
    );
  });

  it("render source avatar", () => {
    const wrapper = mount(
      <Avatar {...baseProps} userName="Demo User" source="demo" />
    );

    expect(wrapper.prop("userName")).toEqual("Demo User");
    expect(wrapper.prop("source")).toEqual("demo");
  });

  it("render without source and username", () => {
    const wrapper = mount(<Avatar source="" userName="" />);
    expect(wrapper.prop("source")).toEqual("");
    expect(wrapper.prop("userName")).toEqual("");
  });
});
