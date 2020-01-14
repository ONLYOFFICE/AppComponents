import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import RadioButtonGroup from ".";

const baseProps = {
  name: "fruits",
  selected: "banana",
  options: [
    { value: "apple", label: "Sweet apple" },
    { value: "banana", label: "Banana" },
    { value: "Mandarin" }
  ]
};

describe("<RadioButtonGroup />", () => {
  it("renders without error", () => {
    const wrapper = mount(<RadioButtonGroup {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <RadioButtonGroup
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

  it("accepts spacing prop", () => {
    const wrapper = mount(<RadioButtonGroup {...baseProps} spacing="10px" />);
    expect(wrapper.prop("spacing")).toEqual("10px");
  });

  it("accepts width prop", () => {
    const wrapper = mount(<RadioButtonGroup {...baseProps} width="200px" />);
    expect(wrapper.prop("width")).toEqual("200px");
  });

  it("accepts disabled prop", () => {
    const wrapper = mount(<RadioButtonGroup {...baseProps} disabled />);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<RadioButtonGroup {...baseProps} />).instance();

    wrapper.componentDidUpdate({ selected: baseProps.options[0] });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.selectedOption).toBe(wrapper.props.selected);

    wrapper.componentDidUpdate({ selected: baseProps.options[2] });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.selectedOption).toBe(wrapper.props.selected);
  });

  it("onInputChange() test", () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const wrapper = shallow(<RadioButtonGroup {...baseProps} />).instance();

    const event = { target: { value: "banana" } };
    wrapper.onInputChange(event);
    expect(wrapper.state.selectedOption).toBe("banana");

    const event2 = { target: { value: "apple" } };
    const wrapper1 = mount(
      <RadioButtonGroup onChange={onChange} onClick={onClick} {...baseProps} />
    );
    const input = wrapper1.find('input[type="radio"]').at(1);
    input.simulate("change", event2);
    expect(onChange).toHaveBeenCalled();
    expect(wrapper1.state("selectedOption")).toEqual("apple");
  });

  test("style tests", () => {
    const tree = renderer
      .create(<RadioButtonGroup {...baseProps} orientation="horizontal" />)
      .toJSON();
    expect(tree).toHaveStyleRule("display", "flex");

    const tree1 = renderer
      .create(<RadioButtonGroup {...baseProps} orientation="vertical" />)
      .toJSON();
    expect(tree1).toHaveStyleRule("display", "block");
  });
});
