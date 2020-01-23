import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import DropDownItem from ".";
import { Base } from "../../themes";

const baseProps = {
  separator: false,
  header: false,
  tabIndex: -1,
  label: "test",
  disabled: false,
  noHover: false,
  onClick: jest.fn()
};

describe("<DropDownItem />", () => {
  it("renders without error", () => {
    const wrapper = mount(<DropDownItem {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <DropDownItem
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

  it("check disabled props", () => {
    const wrapper = mount(<DropDownItem {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  test("test disabled prop styles", () => {
    const tree = renderer
      .create(<DropDownItem {...baseProps} disabled />)
      .toJSON();
    expect(tree).toHaveStyleRule("color", Base.dropDownItem.disabled.color);
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.dropDownItem.disabled.hoverBackgroundColor,
      { modifier: ":hover" }
    );
    expect(tree).toHaveStyleRule(
      "cursor",
      Base.dropDownItem.disabled.hoverCursor,
      { modifier: ":hover" }
    );
  });

  it("check header props", () => {
    const wrapper = mount(<DropDownItem {...baseProps} header />);

    expect(wrapper.prop("header")).toEqual(true);
  });

  test("test header prop styles", () => {
    const tree = renderer
      .create(<DropDownItem {...baseProps} header />)
      .toJSON();
    expect(tree).toHaveStyleRule("color", Base.dropDownItem.header.color);
    expect(tree).toHaveStyleRule(
      "text-transform",
      Base.dropDownItem.header.textTransform
    );
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.dropDownItem.header.hoverBackgroundColor,
      { modifier: ":hover" }
    );
    expect(tree).toHaveStyleRule(
      "cursor",
      Base.dropDownItem.header.hoverCursor,
      { modifier: ":hover" }
    );
  });

  it("check separator props", () => {
    const wrapper = mount(<DropDownItem {...baseProps} separator={true} />);

    expect(wrapper.prop("separator")).toEqual(true);
  });

  test("test separator prop styles", () => {
    const tree = renderer
      .create(<DropDownItem {...baseProps} separator />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.dropDownItem.separator.padding
    );
    expect(tree).toHaveStyleRule("border", Base.dropDownItem.separator.border);
    expect(tree).toHaveStyleRule("cursor", Base.dropDownItem.separator.cursor);
    expect(tree).toHaveStyleRule("margin", Base.dropDownItem.separator.margin);
    expect(tree).toHaveStyleRule(
      "line-height",
      Base.dropDownItem.separator.lineHeight
    );
    expect(tree).toHaveStyleRule("height", Base.dropDownItem.separator.height);
    expect(tree).toHaveStyleRule("width", Base.dropDownItem.separator.width);
  });

  it("check noHover props", () => {
    const wrapper = mount(<DropDownItem {...baseProps} noHover />);

    expect(wrapper.prop("noHover")).toEqual(true);
  });

  test("test noHover prop styles", () => {
    const tree = renderer
      .create(<DropDownItem {...baseProps} noHover />)
      .toJSON();

    expect(tree).toHaveStyleRule(
      "background-color",
      Base.dropDownItem.noHoverBackgroundColor,
      { modifier: ":hover" }
    );

    const tree2 = renderer.create(<DropDownItem {...baseProps} />).toJSON();

    expect(tree2).toHaveStyleRule(
      "background-color",
      Base.dropDownItem.hoverBackgroundColor,
      { modifier: ":hover" }
    );
  });

  it("render with children", () => {
    const wrapper = shallow(<DropDownItem>test</DropDownItem>);

    expect(wrapper.props.children).toEqual(undefined);
  });

  it("causes function onClick()", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <DropDownItem id="test" {...baseProps} onClick={onClick} />
    );

    wrapper.find("#test").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
