import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import Slider from ".";

const baseProps = {
  disabled: false,
  value: "5",
  max: 30,
  min: 1,
  onChange: jest.fn()
};

describe("<Slider />", () => {
  it('renders without error', () => {
    const wrapper = mount(<Slider { ...baseProps} />);
    expect(wrapper).toExist();
  });

  it('render with disabled', () => {
    const wrapper = mount(<Slider { ...baseProps} disabled />);
    expect(wrapper).toExist();
  });

  it('render without max, value, disabled', () => {
    const wrapper = mount(<Slider />);
    expect(wrapper).toExist();
  });

  it('id, className, style is exist', () => {
    const wrapper = mount(
      <Slider
        {...baseProps}
        id='testId'
        className='test'
        style={{ color: 'red' }}
      />
    );

    expect(wrapper.prop('id')).toEqual('testId');
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    wrapper.componentDidUpdate({ value: "8" });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.value).toBe(wrapper.props.value);

    wrapper.componentDidUpdate({ max: 25 });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.max).toBe(wrapper.props.max);

    wrapper.componentDidUpdate({ min: 3 });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.min).toBe(wrapper.props.min);
  });

  it("accepts disabled", () => {
    const wrapper = mount(<Slider {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("onChangeHandler() test", () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();
    expect(wrapper.state.value).toBe(baseProps.value);

    const event = { target: { value: 25 }};
    wrapper.onChangeHandler(event);
    expect(wrapper.state.value).toBe(25);

    const wrapper1 = mount(<Slider {...baseProps} />);
    const input = wrapper1.find('input[type="range"]');
    input.simulate("change", event);
    expect(baseProps.onChange).toHaveBeenCalled();
    expect(wrapper1.state.value).toBe(wrapper1.props.value);
  });
}) 