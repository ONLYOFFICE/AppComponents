import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import FixedInput from ".";
import { Base } from "../../themes";

describe("<FixedInput />", () => {
  const baseProps = {
    value: "text",
    onChange: jest.fn()
  };

  it("renders without error", () => {
    const wrapper = mount(<FixedInput {...baseProps} />);
    expect(wrapper).toExist();
  });



  it("id, className, style is exists", () => {
    const wrapper = mount(
      <FixedInput
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

 test("textInput__fixed disabled style test", () => {
    const checkBorderColor = renderer
      .create(<FixedInput disabled border {...baseProps} />)
      .toJSON();
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.fixedInput.inputBorder
    );
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.input.hoverDisabledBorderColor,
      {
        modifier: ":hover"
      }
    );
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.input.focusDisabledBorderColor,
      {
        modifier: ":focus"
      }
    );
  });

