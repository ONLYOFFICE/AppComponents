import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Base } from "../../themes";
import InputWithOperations from ".";
import TextInput from "../TextInput";


jest.useFakeTimers();
  const baseProps = {
    value: 0,
    step: 1,
    onChange: jest.fn()
  };


describe("<InputWithOperations />", () => {


  it("renders without error", () => {
    const wrapper = mount(<InputWithOperations {...baseProps}></InputWithOperations>);
    expect(wrapper).toExist();
  });

  it("id, className", () => {
    const wrapper = mount(
      <InputWithOperations id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  test("textInput--operations border style test", () => {
    const checkBorderColor = renderer
      .create(<InputWithOperations border {...baseProps} />)
      .toJSON();
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.input.borderColor
    );
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.inputWithOperations.hoverBorderColor,
      {
        modifier: ":hover"
      }
    );
    expect(checkBorderColor).toHaveStyleRule(
      "border-color",
      Base.input.focusBorderColor,
      {
        modifier: ":focus"
      }
    );
  });
  test("textInput--operations error style test", () => {

    const treeRoot = mount(<InputWithOperations error {...baseProps} />);

    const checkErrorBorder = treeRoot.find(TextInput);

    expect(checkErrorBorder).toHaveStyleRule("border-color", Base.input.errorBorderColor);
    expect(checkErrorBorder).toHaveStyleRule(
      "border-color",
      Base.input.hoverErrorBorderColor,
      {
        modifier: ":hover"
      }
    );

    expect(checkErrorBorder).toHaveStyleRule(
      "border-color",
      Base.input.focusErrorBorderColor,
      {
        modifier: ":focus"
      }
    );
  });

  test("textInput--operations warning style test", () => {
    const treeRoot = mount(<InputWithOperations warning {...baseProps} />);

    const checkWarningBorder = treeRoot.find(TextInput);
    expect(checkWarningBorder).toHaveStyleRule("border-color", Base.input.warningBorderColor);
    expect(checkWarningBorder).toHaveStyleRule(
      "border-color",
      Base.input.hoverWarningBorderColor,
      {
        modifier: ":hover"
      }
    );
    expect(checkWarningBorder).toHaveStyleRule(
      "border-color",
      Base.input.focusWarningBorderColor,
      {
        modifier: ":focus"
      }
    );
  });

  test("textInput--operations disabled style test", () => {
    const checkBorderColorDisabled = renderer
      .create(<InputWithOperations disabled {...baseProps} />)
      .toJSON();
    expect(checkBorderColorDisabled).toHaveStyleRule(
      "border-color",
      Base.input.borderColor
    );
    expect(checkBorderColorDisabled).toHaveStyleRule(
      "border-color",
      Base.inputWithOperations.hoverBorderColor,
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

 test("textInput--operations prop test", () => {
      const number = 3;
      const wrapper = mount(<InputWithOperations value={number} />);
      expect(wrapper.state().counter).toBe(number);
      wrapper.setProps({value: 8 });
      expect(wrapper.props().value).toBe(8);

 });

 test("causes function onClickOperations()--plus", () => {
   const number = 6;
   const wrapper = shallow(
     <InputWithOperations {...baseProps} value={number} />
   );
   const instance = wrapper.instance();
   instance.onClickOperations({
     currentTarget: {
       dataset: {
         operation: "plus"
       }
     }
   });
   expect(wrapper.state().counter).toBe(7);
 });
 test("causes function onClickOperations()--minus", () => {
   const number = 6;
   const wrapper = shallow(
     <InputWithOperations {...baseProps} value={number} />
   );
   const instance = wrapper.instance();
   instance.onClickOperations({
     currentTarget: {
       dataset: {
         operation: "minus"
       }
     }
   });
   expect(wrapper.state().counter).toBe(5);
 });
});
