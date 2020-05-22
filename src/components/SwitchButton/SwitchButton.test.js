import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import SwitchButton from ".";

const baseProps = {
  checked: false,
  disabled: false,
  onChange: jest.fn()
};

describe("<SwitchButton />", () => {
  it('renders without error', () => {
    const wrapper = mount(<SwitchButton {...baseProps} />);
    expect(wrapper).toExist();
  });

  it('render with disabled', () => {
    const wrapper = mount(<SwitchButton onClick={jest.fn()} disabled={true} checked={false} />);
    expect(wrapper).toExist();
  });

  it('render without checked', () => {
    const wrapper = mount(<SwitchButton onClick={jest.fn()} disabled={false} />);
    expect(wrapper).toExist();
  });

  it('id, className, style is exist', () => {
    const wrapper = mount(
      <SwitchButton
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
    const wrapper = shallow(<SwitchButton {...baseProps} />).instance();

    wrapper.componentDidUpdate({ checked: true });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);

    wrapper.componentDidUpdate({ checked: false });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.checked).toBe(wrapper.props.checked);
  });

  it("accepts disabled", () => {
    const wrapper = mount(<SwitchButton {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("accepts checked", () => {
    const wrapper = mount(<SwitchButton {...baseProps} checked />);
    expect(wrapper.state("checked")).toEqual(true);

    wrapper.setState({ checked: false });
    expect(wrapper.state("checked")).toEqual(false);
  });

  it("accepts checked and disabled", () => {
    const wrapper = mount(<SwitchButton {...baseProps} checked disabled />);

    expect(wrapper.prop("checked")).toEqual(true);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("onChangeHandler() test", () => {
    const wrapper = shallow(<SwitchButton {...baseProps} />).instance();
    expect(wrapper.state.checked).toBe(false);

    const event = { target: { checked: true }};
    wrapper.onChangeHandler(event);
    expect(wrapper.state.checked).toBe(true);

    const wrapper1 = mount(<SwitchButton {...baseProps} />);
    const input = wrapper1.find('input[type="checkbox"]');
    input.simulate("change", event);
    expect(baseProps.onChange).toHaveBeenCalled();
    expect(wrapper1.state("checked")).toBe(true);
  }); 
})