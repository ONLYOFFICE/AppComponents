import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import RadioButton from ".";
import { Base } from "../../themes/index";

const baseProps = {
  name: "fruits",
  value: "apple",
  label: "Sweet apple",
  onClick: jest.fn(),
  onChange: jest.fn()
};

describe("<RadioButton />", () => {
  it("renders without error", () => {
    const wrapper = mount(<RadioButton {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("reverse renders without error", () => {
    const wrapper = mount(<RadioButton reverse {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("renders without label", () => {
    const wrapper = mount(<RadioButton />);
    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <RadioButton
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

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<RadioButton {...baseProps} />).instance();

    wrapper.componentDidUpdate({ checked: true });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);

    wrapper.componentDidUpdate({ checked: false });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);
  });

  it("accepts disabled prop", () => {
    const wrapper = mount(<RadioButton {...baseProps} disabled />);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("accepts checked prop", () => {
    const wrapper = mount(<RadioButton {...baseProps} checked />);
    expect(wrapper.state("checked")).toEqual(true);

    wrapper.setState({ checked: false });
    expect(wrapper.state("checked")).toEqual(false);
  });

  it("accepts checked and disabled", () => {
    const wrapper = mount(<RadioButton {...baseProps} checked disabled />);

    expect(wrapper.prop("checked")).toEqual(true);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("onInputChange() test", () => {
    const wrapper = shallow(<RadioButton {...baseProps} />).instance();
    expect(wrapper.state.checked).toBe(false);

    const event = { target: { checked: true } };
    wrapper.onInputChange(event);
    expect(wrapper.state.checked).toBe(true);

    const wrapper1 = mount(<RadioButton {...baseProps} />);
    const input = wrapper1.find('input[type="radio"]');
    input.simulate("change", event);
    expect(baseProps.onChange).toHaveBeenCalled();
    expect(wrapper1.state("checked")).toBe(true);
  });

  test("svg style test", () => {
    const tree = renderer
      .create(
        <RadioButton disabled>
          <path />
        </RadioButton>
      )
      .toJSON();

    expect(tree).toHaveStyleRule("cursor", "default");
    expect(tree).toHaveStyleRule(
      "stroke",
      Base.radioButton.disableBorderColor,
      {
        modifier: "path:first-child"
      }
    );
    expect(tree).toHaveStyleRule("fill", Base.radioButton.disableFillColor, {
      modifier: "path:nth-child(even)"
    });

    const tree2 = renderer
      .create(
        <RadioButton>
          <path />
        </RadioButton>
      )
      .toJSON();

    expect(tree2).toHaveStyleRule("cursor", "pointer");
    expect(tree2).toHaveStyleRule("stroke", Base.radioButton.borderColor, {
      modifier: "path:first-child"
    });

    expect(tree2).toHaveStyleRule("fill", Base.radioButton.fillColor, {
      modifier: "path:nth-child(even)"
    });

    const tree3 = renderer
      .create(
        <RadioButton orientation="horizontal" spacing="15px">
          <path />
        </RadioButton>
      )
      .toJSON();

    expect(tree3).toHaveStyleRule("margin-left", "15px", {
      modifier: "&:not(:first-child)"
    });

    const tree4 = renderer
      .create(
        <RadioButton orientation="vertical" spacing="15px">
          <path />
        </RadioButton>
      )
      .toJSON();

    expect(tree4).toHaveStyleRule("margin-bottom", "15px", {
      modifier: "&:not(:last-child)"
    });
  });

  test("svg text style test", () => {
    const tree = renderer
      .create(<RadioButton {...baseProps} reverse />)
      .toJSON();
    expect(tree).toHaveStyleRule("margin-right", "8px", {
      modifier: ".radio-button-text"
    });
    expect(tree).toHaveStyleRule("color", Base.radioButton.color, {
      modifier: ".radio-button-text"
    });

    const tree1 = renderer
      .create(<RadioButton {...baseProps} disabled />)
      .toJSON();
    expect(tree1).toHaveStyleRule("margin-left", "8px", {
      modifier: ".radio-button-text"
    });
    expect(tree1).toHaveStyleRule("color", Base.radioButton.disableColor, {
      modifier: ".radio-button-text"
    });
  });
});
