import React from 'react';
import { mount, shallow } from 'enzyme';
import Checkbox from '.';

const baseProps = {
  value: 'test'
}

describe('<Checkbox />', () => {
  it('renders without error', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} />
    );

    expect(wrapper).toExist();
  });

  it('accepts id', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} id="testId" />
    );

    expect(wrapper.prop('id')).toEqual('testId');
  });

  it('accepts className', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} className="test" />
    );

    expect(wrapper.prop('className')).toEqual('test');
  });

  it('accepts style', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} style={{ color: 'red' }} />
    );

    expect(wrapper.getDOMNode().style).toHaveProperty('color', 'red');
  });

  it('accepts disabled', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} disabled />
    );

    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('accepts indeterminate', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} indeterminate />
    );

    expect(wrapper.prop('indeterminate')).toEqual(true);
  });

  it('accepts checked', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} checked />
    );

    expect(wrapper.prop('checked')).toEqual(true);
  });

  it('accepts checked and disabled', () => {
    const wrapper = mount(
      <Checkbox {...baseProps} checked disabled />
    );

    expect(wrapper.prop('checked')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('componentDidUpdate() props lifecycle test', () => {
    const wrapper = shallow(<Checkbox {...baseProps} />);
    const instance = wrapper.instance();

    instance.componentDidUpdate({
      checked: true
    }, wrapper.state());

    expect(wrapper.props()).toBe(wrapper.props());

    instance.componentDidUpdate({
      checked: false
    }, wrapper.state());

    expect(wrapper.props()).toBe(wrapper.props());
  });
});
