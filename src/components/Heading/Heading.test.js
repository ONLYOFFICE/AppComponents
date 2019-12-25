import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Heading from ".";
import ThemeProvider from "../ThemeProvider";
import { Base } from "../../themes/index";

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

  test("it applies styles", () => {
    const tree = renderer
      .create(
        <Heading color="red" truncate inline>
          Some text
        </Heading>
      )
      .toJSON();

    expect(tree).toHaveStyleRule("color", "red");
    expect(tree).toHaveStyleRule("white-space", "nowrap");
    expect(tree).toHaveStyleRule("overflow", "hidden");
    expect(tree).toHaveStyleRule("text-overflow", "ellipsis");
    expect(tree).toHaveStyleRule("display", "inline-block");

    const tree2 = renderer
      .create(
        <ThemeProvider theme={Base}>
          <Heading>Some text</Heading>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree2).toHaveStyleRule("color", Base.text.color);
  });

  it("test css props", () => {
    const wrapper = mount(
      <Heading truncate inline color="red">
        Some text
      </Heading>
    );

    expect(wrapper.props().color).toEqual("red");
    expect(wrapper.props().inline).toEqual(true);
    expect(wrapper.props().truncate).toEqual(true);

    const wrapperXLargeSize = mount(<Heading size="xlarge">Some text</Heading>);
    expect(wrapperXLargeSize.props().size).toEqual("xlarge");

    const wrapperLargeSize = mount(<Heading size="large">Some text</Heading>);
    expect(wrapperLargeSize.props().size).toEqual("large");

    const wrapperMediumSize = mount(<Heading size="medium">Some text</Heading>);
    expect(wrapperMediumSize.props().size).toEqual("medium");

    const wrapperSmallSize = mount(<Heading size="small">Some text</Heading>);
    expect(wrapperSmallSize.props().size).toEqual("small");

    const wrapperXSmallSize = mount(<Heading size="xsmall">Some text</Heading>);
    expect(wrapperXSmallSize.props().size).toEqual("xsmall");
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Heading size="xlarge">Some text</Heading>)
      .toJSON();
    expect(tree).toHaveStyleRule("font-size", Base.heading.fontSize.xlarge);
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Heading size="large">Some text</Heading>)
      .toJSON();
    expect(tree).toHaveStyleRule("font-size", Base.heading.fontSize.large);
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Heading size="medium">Some text</Heading>)
      .toJSON();
    expect(tree).toHaveStyleRule("font-size", Base.heading.fontSize.medium);
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Heading size="small">Some text</Heading>)
      .toJSON();
    expect(tree).toHaveStyleRule("font-size", Base.heading.fontSize.small);
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Heading size="xsmall">Some text</Heading>)
      .toJSON();
    expect(tree).toHaveStyleRule("font-size", Base.heading.fontSize.xsmall);
  });
});
