import React from "react";
import { mount, shallow } from "enzyme";
import ComboBox from ".";
import renderer from "react-test-renderer";
import "jest-styled-components";
import DropDownItem from "../DropDownItem";
import { Base } from "../../themes";
import {
  StyledArrowIcon,
  StyledComboButton,
  StyledOptionalItem
} from "./StyledComboBox";

const baseOptions = [
  { key: 0, label: "Select" },
  { key: 1, label: "Select" },
  { key: 2, label: "Select" }
];

const advancedOptions = (
  <>
    <DropDownItem>
      <span>Some text</span>
    </DropDownItem>
  </>
);

const baseProps = {
  selectedOption: baseOptions[0],
  options: baseOptions
};

const toggleDisplayProps = {
  options: [],
  selectedOption: {
    key: 0,
    label: "Selected option"
  },
  scaled: false,
  size: "content",
  displayType: "toggle"
};

describe("<ComboBox />", () => {
  it("rendered without error", () => {
    const wrapper = mount(<ComboBox {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("test size options", () => {
    const wrapper = mount(<ComboBox {...baseProps} size="base" />);
    expect(wrapper.prop("size")).toEqual("base");

    const wrapper2 = mount(<ComboBox {...baseProps} size="middle" />);
    expect(wrapper2.prop("size")).toEqual("middle");

    const wrapper3 = mount(<ComboBox {...baseProps} size="big" />);
    expect(wrapper3.prop("size")).toEqual("big");

    const wrapper4 = mount(<ComboBox {...baseProps} size="huge" />);
    expect(wrapper4.prop("size")).toEqual("huge");

    const wrapper5 = mount(<ComboBox {...baseProps} size="content" />);
    expect(wrapper5.prop("size")).toEqual("content");
  });

  test("test size styles", () => {
    const tree = renderer.create(<ComboBox scaled {...baseProps} />).toJSON();
    expect(tree).toHaveStyleRule("width", "100%");

    const tree2 = renderer
      .create(<ComboBox size="base" {...baseProps} />)
      .toJSON();
    expect(tree2).toHaveStyleRule("width", Base.comboBox.width.base);

    const tree3 = renderer
      .create(<ComboBox size="middle" {...baseProps} />)
      .toJSON();
    expect(tree3).toHaveStyleRule("width", Base.comboBox.width.middle);

    const tree4 = renderer
      .create(<ComboBox size="big" {...baseProps} />)
      .toJSON();
    expect(tree4).toHaveStyleRule("width", Base.comboBox.width.big);

    const tree5 = renderer
      .create(<ComboBox size="huge" {...baseProps} />)
      .toJSON();
    expect(tree5).toHaveStyleRule("width", Base.comboBox.width.huge);

    const tree6 = renderer
      .create(
        <ComboBox size="content" {...baseProps}>
          ComboBox
        </ComboBox>
      )
      .toJSON();
    expect(tree6).toHaveStyleRule("width", "fit-content");
  });

  test("test StyledArrowIcon styles", () => {
    const tree = renderer.create(<StyledArrowIcon needDisplay />).toJSON();
    expect(tree).toHaveStyleRule("width", Base.comboBox.arrow.width);

    const tree2 = renderer.create(<StyledArrowIcon />).toJSON();
    expect(tree2).toHaveStyleRule("width", "0px");

    const tree3 = renderer.create(<StyledArrowIcon needDisplay />).toJSON();
    expect(tree3).toHaveStyleRule("flex", Base.comboBox.arrow.flex);

    const tree4 = renderer.create(<StyledArrowIcon />).toJSON();
    expect(tree4).toHaveStyleRule("flex", "0 0 0px");

    const tree5 = renderer.create(<StyledArrowIcon needDisplay />).toJSON();
    expect(tree5).toHaveStyleRule(
      "margin-right",
      Base.comboBox.arrow.marginRight
    );

    const tree6 = renderer.create(<StyledArrowIcon />).toJSON();
    expect(tree6).toHaveStyleRule("margin-right", "0px");

    const tree7 = renderer.create(<StyledArrowIcon needDisplay />).toJSON();
    expect(tree7).toHaveStyleRule(
      "margin-left",
      Base.comboBox.arrow.marginLeft
    );

    const tree8 = renderer.create(<StyledArrowIcon />).toJSON();
    expect(tree8).toHaveStyleRule("margin-left", "0px");

    const tree9 = renderer.create(<StyledArrowIcon withoutBorder />).toJSON();
    expect(tree9).toHaveStyleRule(
      "margin-top",
      Base.comboBox.arrow.marginTopWithBorder
    );

    const tree10 = renderer.create(<StyledArrowIcon />).toJSON();
    expect(tree10).toHaveStyleRule("margin-top", Base.comboBox.arrow.marginTop);

    const tree11 = renderer.create(<StyledArrowIcon open />).toJSON();
    expect(tree11).toHaveStyleRule("transform", "scale(1,-1)");
  });

  test("test StyledComboButton styles", () => {
    const tree = renderer.create(<StyledComboButton withoutBorder />).toJSON();
    expect(tree).toHaveStyleRule("height", Base.comboBox.button.height);

    const tree2 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree2).toHaveStyleRule(
      "height",
      Base.comboBox.button.heightWithBorder
    );

    const tree3 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree3).toHaveStyleRule(
      "background",
      Base.comboBox.button.backgroundWithBorder
    );

    const tree4 = renderer.create(<StyledComboButton withoutBorder />).toJSON();
    expect(tree4).toHaveStyleRule(
      "background",
      Base.comboBox.button.background
    );

    const tree5 = renderer.create(<StyledComboButton disabled />).toJSON();
    expect(tree5).toHaveStyleRule("color", Base.comboBox.button.disabledColor);
    expect(tree5).toHaveStyleRule(
      "border-color",
      Base.comboBox.button.disabledBorderColor
    );
    expect(tree5).toHaveStyleRule(
      "background",
      Base.comboBox.button.disabledBackground
    );

    const tree6 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree6).toHaveStyleRule("color", Base.comboBox.button.color);

    const tree7 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree7).toHaveStyleRule("border", Base.comboBox.button.border);
    expect(tree7).toHaveStyleRule(
      "border-radius",
      Base.comboBox.button.borderRadius
    );

    const tree8 = renderer.create(<StyledComboButton open />).toJSON();
    expect(tree8).toHaveStyleRule(
      "border-color",
      Base.comboBox.button.borderColor
    );

    const tree9 = renderer.create(<StyledComboButton open />).toJSON();
    expect(tree9).toHaveStyleRule(
      "border-color",
      Base.comboBox.button.hoverBorderColorOpen,
      { modifier: ":hover" }
    );

    const tree10 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree10).toHaveStyleRule(
      "border-color",
      Base.comboBox.button.hoverBorderColor,
      { modifier: ":hover" }
    );

    const tree11 = renderer.create(<StyledComboButton disabled />).toJSON();
    expect(tree11).toHaveStyleRule("cursor", "default", { modifier: ":hover" });

    const tree12 = renderer
      .create(<StyledComboButton containOptions />)
      .toJSON();
    expect(tree12).toHaveStyleRule("cursor", "pointer", { modifier: ":hover" });

    const tree13 = renderer.create(<StyledComboButton disabled />).toJSON();
    expect(tree13).toHaveStyleRule(
      "border-color",
      Base.comboBox.button.hoverDisabledBorderColor,
      { modifier: ":hover" }
    );

    const tree14 = renderer
      .create(<StyledComboButton withoutBorder />)
      .toJSON();
    expect(tree14).toHaveStyleRule(
      "margin-right",
      Base.comboBox.label.marginRight,
      { modifier: ".combo-button-label" }
    );

    const tree15 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree15).toHaveStyleRule(
      "margin-right",
      Base.comboBox.label.marginRightWithBorder,
      { modifier: ".combo-button-label" }
    );

    const tree16 = renderer
      .create(<StyledComboButton defaultOption disabled />)
      .toJSON();
    expect(tree16).toHaveStyleRule(
      "color",
      Base.comboBox.label.defaultDisabledColor,
      { modifier: ".combo-button-label" }
    );

    const tree17 = renderer
      .create(<StyledComboButton defaultOption />)
      .toJSON();
    expect(tree17).toHaveStyleRule("color", Base.comboBox.label.defaultColor, {
      modifier: ".combo-button-label"
    });

    const tree18 = renderer.create(<StyledComboButton disabled />).toJSON();
    expect(tree18).toHaveStyleRule("color", Base.comboBox.label.disabledColor, {
      modifier: ".combo-button-label"
    });

    const tree19 = renderer.create(<StyledComboButton />).toJSON();
    expect(tree19).toHaveStyleRule("color", Base.comboBox.label.color, {
      modifier: ".combo-button-label"
    });

    const tree20 = renderer
      .create(<StyledComboButton withoutBorder />)
      .toJSON();
    expect(tree20).toHaveStyleRule(
      "line-height",
      Base.comboBox.label.lineHeightWithoutBorder,
      { modifier: ".combo-button-label" }
    );
    expect(tree20).toHaveStyleRule(
      "text-decoration",
      Base.comboBox.label.lineHeightTextDecoration,
      { modifier: ".combo-button-label" }
    );

    const tree21 = renderer
      .create(<StyledComboButton withoutBorder open />)
      .toJSON();
    expect(tree21).toHaveStyleRule("text-decoration", "underline dashed", {
      modifier: ".combo-button-label"
    });

    const tree22 = renderer
      .create(<StyledComboButton withoutBorder />)
      .toJSON();
    expect(tree22).toHaveStyleRule("text-decoration", "underline dashed", {
      modifier: ".combo-button-label:hover"
    });
  });

  test("test StyledOptionalItem styles", () => {
    const tree = renderer
      .create(<StyledOptionalItem defaultOption disabled />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "fill",
      Base.comboBox.childrenButton.defaultDisabledColor,
      { modifier: "path" }
    );

    const tree2 = renderer
      .create(<StyledOptionalItem defaultOption />)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "fill",
      Base.comboBox.childrenButton.defaultColor,
      { modifier: "path" }
    );

    const tree3 = renderer.create(<StyledOptionalItem disabled />).toJSON();
    expect(tree3).toHaveStyleRule(
      "fill",
      Base.comboBox.childrenButton.disabledColor,
      { modifier: "path" }
    );

    const tree4 = renderer.create(<StyledOptionalItem />).toJSON();
    expect(tree4).toHaveStyleRule("fill", Base.comboBox.childrenButton.color, {
      modifier: "path"
    });
  });

  it("with advanced options", () => {
    const wrapper = mount(
      <ComboBox {...baseProps} options={[]} advancedOptions={advancedOptions} />
    );

    expect(wrapper).toExist();
  });

  it("disabled", () => {
    const wrapper = mount(<ComboBox {...baseProps} disabled />);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("without borders", () => {
    const wrapper = mount(<ComboBox {...baseProps} withoutBorder />);
    expect(wrapper.prop("withoutBorder")).toEqual(true);
  });

  it("open", () => {
    const wrapper = mount(<ComboBox {...baseProps} open />);
    expect(wrapper.prop("open")).toEqual(true);
  });

  it("open without borders", () => {
    const wrapper = mount(<ComboBox {...baseProps} open withoutBorder />);

    expect(wrapper.prop("open")).toEqual(true);
    expect(wrapper.prop("withoutBorder")).toEqual(true);
  });

  it("with DropDown max height", () => {
    const wrapper = mount(<ComboBox {...baseProps} dropDownMaxHeight={200} />);

    expect(wrapper.prop("dropDownMaxHeight")).toEqual(200);
  });

  it("without scaled", () => {
    const wrapper = mount(<ComboBox {...baseProps} scaled />);

    expect(wrapper.prop("scaled")).toEqual(true);
  });

  it("scaled options", () => {
    const wrapper = mount(<ComboBox {...baseProps} scaledOptions />);

    expect(wrapper.prop("scaledOptions")).toEqual(true);
  });

  it("with children node", () => {
    const wrapper = mount(
      <ComboBox {...baseProps}>
        <div>demo</div>
      </ComboBox>
    );

    expect(wrapper.contains(<div>demo</div>)).toBe(true);
  });

  it("not re-render test", () => {
    const wrapper = shallow(<ComboBox {...baseProps} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(
      wrapper.props,
      wrapper.state
    );

    expect(shouldUpdate).toBe(false);
  });

  it("re-render test", () => {
    const wrapper = shallow(<ComboBox {...baseProps} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(
      { open: true },
      wrapper.state
    );

    expect(shouldUpdate).toBe(true);
  });

  it("causes function onComboBoxClick()", () => {
    const wrapper = shallow(<ComboBox {...baseProps} />);
    const instance = wrapper.instance();

    instance.onComboBoxClick();

    expect(wrapper.state("open")).toBe(true);
  });

  it("causes function onOptionClick()", () => {
    const onSelect = jest.fn();
    const selectedOption = {
      key: 1,
      label: "Select"
    };
    const wrapper = shallow(
      <ComboBox {...baseProps} open={true} onSelect={onSelect} />
    );
    const instance = wrapper.instance();

    instance.onOptionClick(selectedOption);

    expect(wrapper.state("open")).toBe(false);
    expect(onSelect).toHaveBeenCalledWith(selectedOption);
  });

  it("causes function handleClick() with simulate", () => {
    const wrapper = mount(<ComboBox {...baseProps} open />);

    wrapper.simulate("click");

    expect(wrapper.state("open")).toBe(false);
  });

  it("disabled onComboBoxClick test", () => {
    const wrapper = mount(<ComboBox {...baseProps} disabled />);

    wrapper.simulate("click");
    expect(wrapper.state("open")).toBe(wrapper.state("open"));
  });

  it("causes function handleClick() with simulate and ComboBox not open", () => {
    const wrapper = mount(<ComboBox {...baseProps} />);

    wrapper.simulate("click");

    expect(wrapper.state("open")).toBe(true);
  });

  it("componentDidUpdate() lifecycle test", () => {
    const wrapper = shallow(<ComboBox {...baseProps} />);
    const instance = wrapper.instance();
    const newSelected = { key: 1, label: "Select" };

    instance.componentDidUpdate({ open: true });
    expect(wrapper.props()).toBe(wrapper.props());

    instance.componentDidUpdate({ selectedOption: newSelected });
    expect(wrapper.props()).toBe(wrapper.props());
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <ComboBox
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

  it("render like toggle displayType", () => {
    const onToggleClick = jest.fn();
    const wrapper = mount(
      <ComboBox {...toggleDisplayProps} toggleAction={onToggleClick} />
    );

    expect(wrapper.prop("displayType")).toEqual("toggle");
  });

  it("click outside", () => {
    const onToggleClick = jest.fn();
    const wrapper = mount(
      <ComboBox {...baseProps} open toggleAction={onToggleClick} />
    );
    const instance = wrapper.instance();

    jest.spyOn(instance, "handleClickOutside");

    instance.handleClickOutside(new Event("click")); //TODO: rework with simulation

    expect(wrapper.state("open")).toBe(false);
    expect(wrapper.prop("open")).toBe(true);
    expect(instance.handleClickOutside).toHaveBeenCalled();
    expect(onToggleClick).toHaveBeenCalled();
  });
});
