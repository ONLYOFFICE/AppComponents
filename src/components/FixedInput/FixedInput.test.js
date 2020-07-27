import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import FixedInput from ".";
import { Base } from "../../themes";
import Text from "../text";
import StyledFixedInput from "./StyledFixedInput";
import TextInput from "../TextInput";

describe("<FixedInput />", () => {
  const baseProps = {
    value: "text",
    onChange: jest.fn()
  };

  it("renders without error", () => {
    const wrapper = mount(<StyledFixedInput {...baseProps}>
      </StyledFixedInput>);
    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <StyledFixedInput id="testId" className="test" style={{ color: "red" }}>

      </StyledFixedInput>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });


  test("textInput--fixed border style test", () => {
    const checkBorderColor = renderer
      .create(
        <StyledFixedInput border {...baseProps}>

        </StyledFixedInput>
      )
      .toJSON();
    expect(checkBorderColor).toHaveStyleRule("border-color",Base.input.borderColor);
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.fixedInput.hoverBorderColor,
      {
        modifier: ":hover"
      }
    );
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.fixedInput.focusBorderColor,
      {
        modifier: ":focus"
      }
    );
  });

 test("text-input error style test", () => {
   const tree = renderer
     .create(
       <StyledFixedInput error {...baseProps}>
       </StyledFixedInput>
     )
    
     .toJSON();
  //  expect(tree).toHaveStyleRule("border-color", Base.input.errorBorderColor);
   expect(tree).toHaveStyleRule(
     "border-color",
     Base.input.hoverErrorBorderColor,
     {
       modifier: ":hover"
     }
   );
   expect(tree).toHaveStyleRule(
     "border-color",
     Base.input.focusErrorBorderColor,
     {
       modifier: ":focus"
     }
   );
 });

  test("textInput--fixed disabled style test", () => {
    const checkBorderColorDisabled = renderer
      .create(
        <StyledFixedInput disabled {...baseProps}>

        </StyledFixedInput>
      )
      .toJSON();
    expect(checkBorderColorDisabled).toHaveStyleRule(
      "border-color",
      Base.input.borderColor
    );
    expect(checkBorderColorDisabled).toHaveStyleRule(
      "border-color",
      Base.fixedInput.hoverBorderColor,
      {
        modifier: ":hover"
      }
    );
    expect(checkBorderColorDisabled).toHaveStyleRule(
      "border-color",
      Base.input.focusDisabledBorderColor,
      {
        modifier: ":focus"
      }
    );
  });
});
