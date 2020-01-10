import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ToggleButton from ".";
import { Base } from "../../themes/index";
import { StyledText } from "./StyledToggleButton";

const baseProps = {
  label: "checkbox",
  onChange: jest.fn()
};

describe("<ToggleButton />", () => {
  it("renders without error", () => {
    const wrapper = mount(<ToggleButton {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("reverse renders without error", () => {
    const wrapper = mount(<ToggleButton reverse {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("render without label", () => {
    const wrapper = mount(<ToggleButton onChange={jest.fn()} />);
    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <ToggleButton
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
    const wrapper = shallow(<ToggleButton {...baseProps} />).instance();

    wrapper.componentDidUpdate({ checked: true });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);

    wrapper.componentDidUpdate({ checked: false });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);
  });

  it("accepts disabled", () => {
    const wrapper = mount(<ToggleButton {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("accepts checked", () => {
    const wrapper = mount(<ToggleButton {...baseProps} checked />);
    expect(wrapper.state("checked")).toEqual(true);

    wrapper.setState({ checked: false });
    expect(wrapper.state("checked")).toEqual(false);
  });

  it("accepts checked and disabled", () => {
    const wrapper = mount(<ToggleButton {...baseProps} checked disabled />);

    expect(wrapper.prop("checked")).toEqual(true);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  test("svg style test", () => {
    const tree = renderer
      .create(
        <ToggleButton {...baseProps} checked>
          <svg>
            <rect />
          </svg>
        </ToggleButton>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("fill", Base.toggleButton.fillColor, {
      modifier: "svg rect"
    });

    const tree2 = renderer
      .create(
        <ToggleButton {...baseProps} disabled checked>
          <svg>
            <rect />
          </svg>
        </ToggleButton>
      )
      .toJSON();
    expect(tree2).toHaveStyleRule("fill", Base.toggleButton.disableFillColor, {
      modifier: "svg rect"
    });

    const tree3 = renderer
      .create(
        <ToggleButton {...baseProps}>
          <svg>
            <rect />
          </svg>
        </ToggleButton>
      )
      .toJSON();
    expect(tree3).toHaveStyleRule("fill", Base.toggleButton.fillColorOff, {
      modifier: "svg rect"
    });

    const tree4 = renderer
      .create(
        <ToggleButton {...baseProps} disabled>
          <svg>
            <rect />
          </svg>
        </ToggleButton>
      )
      .toJSON();
    expect(tree4).toHaveStyleRule("cursor", "default");
    expect(tree4).toHaveStyleRule(
      "fill",
      Base.toggleButton.disableFillColorOff,
      { modifier: "svg rect" }
    );

    const tree5 = renderer.create(<StyledText reverse></StyledText>).toJSON();
    expect(tree5).toHaveStyleRule("margin-right", "8px");

    const tree6 = renderer.create(<StyledText></StyledText>).toJSON();
    expect(tree6).toHaveStyleRule("margin-left", "8px");
  });
});
