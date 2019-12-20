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

  it("test css props", () => {
    const wrapper = mount(
      <Heading truncate inline color="red">
        Some text
      </Heading>
    );

    expect(wrapper.props().color).toEqual("red");
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
});
