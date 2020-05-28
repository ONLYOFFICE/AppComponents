import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import Slider from ".";

const baseProps = {
  disabled: false,
  value: "5",
  max: 30,
  min: 0,
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

  it('render without max, value, disabled, min', () => {
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

  it("componentDidMount() props lifecycle test", () => {
    const wrapper = shallow(<Slider {...baseProps}  max={-1} min={-1} />).instance();

    wrapper.componentDidMount();
    expect(wrapper.state.max).toBe(0);
    expect(wrapper.state.min).toBe(0);
  });

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    wrapper.componentDidUpdate({ value: "8" });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.value).toBe(wrapper.props.value);
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

  it('onRight() test', () => {
    const wrapper = shallow(<Slider {...baseProps} value="22"/>).instance();
    const event = { target: { value: "23" }};

    wrapper.onRight(event);
    expect(wrapper.state.value).toBe("23");
  });

  it(' onLeft() test', () => {
    const wrapper = shallow(<Slider {...baseProps} value="22"/>).instance();
    const event = { target: { value: "22" }};

    wrapper.onLeft(event);
    expect(wrapper.state.value).toBe("21");
  });

  it('max value test', () => {
    const wrapper = shallow(<Slider {...baseProps} value="30"/>).instance();
    const event = { target: { value: "30" }};
    
    wrapper.onRight(event);
    expect(wrapper.state.value).toBe("30");
  });
  
  it('min value test', () => {
    const wrapper = shallow(<Slider {...baseProps} value="0"/>).instance();
    const event = { target: { value: "0" }};

    wrapper.onLeft(event);
    expect(wrapper.state.value).toBe("0");
  });

  it('onFocusHandler() test', () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    wrapper.onFocusHandler();
    expect(wrapper.state.focus).toBe(true);

    wrapper.onFocusHandler();
    expect(wrapper.state.focus).toBe(false);
  });
}) 