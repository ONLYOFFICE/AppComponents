import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Checkbox from ".";
import { StyledCheckbox } from "./StyledCheckbox";
import { Base } from "../../themes/index";

const baseProps = {
  label: "checkbox",
  color: "#FFFF",
  onChange: jest.fn()
};

describe("<Checkbox />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Checkbox {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("render without label", () => {
    const wrapper = mount(<Checkbox onChange={jest.fn()} />);
    expect(wrapper).toExist();
  });

  it("reverse renders without error", () => {
    const wrapper = mount(<Checkbox reverse {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Checkbox
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

  it("accepts disabled", () => {
    const wrapper = mount(<Checkbox {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("accepts indeterminate", () => {
    const wrapper = mount(<Checkbox {...baseProps} indeterminate />);

    expect(wrapper.prop("indeterminate")).toEqual(true);
  });

  it("accepts checked", () => {
    const wrapper = mount(<Checkbox {...baseProps} checked />);

    expect(wrapper.prop("checked")).toEqual(true);
  });

  it("accepts checked and disabled", () => {
    const wrapper = mount(<Checkbox {...baseProps} checked disabled />);

    expect(wrapper.prop("checked")).toEqual(true);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("input indeterminate test", () => {
    const wrapper1 = mount(<Checkbox {...baseProps} indeterminate/>);

    expect(wrapper1.prop("indeterminate")).toEqual(true);

    wrapper1.setProps({ indeterminate: false });
    expect(wrapper1.prop("indeterminate")).toEqual(false);

    wrapper1.setProps({ indeterminate: true });
    expect(wrapper1.prop("indeterminate")).toEqual(true);
  });

  it("onInputChange() test", () => {
    const wrapper = mount(<Checkbox {...baseProps} />);
    expect(wrapper.props().checked).toBe(false);

    const input = wrapper.find('input[type="checkbox"]');
    input.simulate("change");

    expect(baseProps.onChange).toHaveBeenCalled();
  });

  test("svg style test", () => {

    const tree = renderer
      .create(
        <StyledCheckbox {...baseProps}>
          <svg>
            <rect />
          </svg>
        </StyledCheckbox>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("fill", Base.checkbox.fillColor, {
      modifier: "svg rect"
    });

    const tree1 = renderer
      .create(
        <StyledCheckbox disabled {...baseProps}>
          <svg>
            <rect />
          </svg>
        </StyledCheckbox>
      )
      .toJSON();
    expect(tree1).toHaveStyleRule("fill", Base.checkbox.disableFillColor, {
       modifier: "svg rect"
     });

    const tree2 = renderer
      .create(
        <StyledCheckbox indeterminate {...baseProps}>
          <svg>
            <rect />
          </svg>
        </StyledCheckbox>
      )
      .toJSON();
    expect(tree2).toHaveStyleRule("fill", Base.checkbox.indeterminateColor, {
      modifier: "svg rect:last-child"
    });

    const tree3 = renderer
      .create(
        <StyledCheckbox disabled indeterminate {...baseProps}>
          <svg>
            <rect />
          </svg>
        </StyledCheckbox>
      )
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "fill",
      Base.checkbox.disableIndeterminateColor,
      {
        modifier: "svg rect:last-child"
      }
    );

    const tree4 = renderer.create(<StyledCheckbox reverse />).toJSON();
    expect(tree4).toHaveStyleRule("margin-right", "8px", {
      modifier: ".checkbox-text"
    });

    const tree5 = renderer.create(<StyledCheckbox />).toJSON();
    expect(tree5).toHaveStyleRule("margin-left", "8px", {
      modifier: ".checkbox-text"
    });
  });
});
