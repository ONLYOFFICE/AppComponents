import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Base } from "../../themes";
import FixedInput from ".";
import TextInput from "../TextInput";


describe("<FixedInput />", () => {
  const baseProps = {
    value: "text",
    onChange: jest.fn()
  };

  it("renders without error", () => {
    const wrapper = mount(<FixedInput {...baseProps}>
      </FixedInput>);
    expect(wrapper).toExist();
  });

  it("id, className", () => {
    const wrapper = mount(
      <FixedInput id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });


  test("textInput--fixed border style test", () => {
    const checkBorderColor = renderer
      .create(
        <FixedInput border {...baseProps} />
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
test("textInput--fixed error style test", () => {
  const treeRoot = mount(<FixedInput error {...baseProps} />);

  const tree = treeRoot.find(TextInput);

  expect(tree).toHaveStyleRule("border-color", Base.input.errorBorderColor);
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

test("textInput--fixed warning style test", () => {
 const treeRoot = mount(<FixedInput warning {...baseProps} />);

 const tree = treeRoot.find(TextInput);
  expect(tree).toHaveStyleRule("border-color", Base.input.warningBorderColor);
  expect(tree).toHaveStyleRule(
    "border-color",
    Base.input.hoverWarningBorderColor,
    {
      modifier: ":hover"
    }
  );
  expect(tree).toHaveStyleRule(
    "border-color",
    Base.input.focusWarningBorderColor,
    {
      modifier: ":focus"
    }
  );
});

  test("textInput--fixed disabled style test", () => {
    const checkBorderColorDisabled = renderer
      .create(
        <FixedInput disabled {...baseProps} />
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
