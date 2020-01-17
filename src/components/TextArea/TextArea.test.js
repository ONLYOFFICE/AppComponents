import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import TextArea from ".";
import { Base } from "../../themes";

const baseProps = {
  onChange: jest.fn(),
  value: "value",
  placeholder: "Add comment"
};
describe("<TextArea />", () => {
  it("renders without error", () => {
    const wrapper = mount(<TextArea {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <TextArea
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

  it("TextArea onChange test", () => {
    const event = { target: { value: "value" } };

    const wrapper = mount(<TextArea {...baseProps} />);
    const input = wrapper.find("textarea");
    input.simulate("change", event);
    expect(baseProps.onChange).toHaveBeenCalled();
  });

  test("disabled style test", () => {
    const tree = renderer.create(<TextArea disabled {...baseProps} />).toJSON();

    expect(tree).toHaveStyleRule("color", Base.input.disableColor);
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.input.disableBackgroundColor
    );
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.disabledBorderColor
    );
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.hoverDisabledBorderColor,
      { modifier: ":hover" }
    );
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.focusDisabledBorderColor,
      { modifier: ":focus" }
    );
  });

  test("base style test", () => {
    const tree = renderer.create(<TextArea {...baseProps} />).toJSON();

    expect(tree).toHaveStyleRule("color", Base.input.color);
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.input.backgroundColor
    );
    expect(tree).toHaveStyleRule("border-color", Base.input.borderColor);
    expect(tree).toHaveStyleRule("border-color", Base.input.hoverBorderColor, {
      modifier: ":hover"
    });
    expect(tree).toHaveStyleRule("border-color", Base.input.focusBorderColor, {
      modifier: ":focus"
    });
  });

  test("error style test", () => {
    const tree = renderer.create(<TextArea error {...baseProps} />).toJSON();

    expect(tree).toHaveStyleRule("border-color", Base.input.errorBorderColor);
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.hoverErrorBorderColor,
      { modifier: ":hover" }
    );
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.focusErrorBorderColor,
      { modifier: ":focus" }
    );
  });

  test("warning style test", () => {
    const tree = renderer.create(<TextArea warning {...baseProps} />).toJSON();

    expect(tree).toHaveStyleRule("border-color", Base.input.warningBorderColor);
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.hoverWarningBorderColor,
      { modifier: ":hover" }
    );
    expect(tree).toHaveStyleRule(
      "border-color",
      Base.input.focusWarningBorderColor,
      { modifier: ":focus" }
    );
  });
});
