import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '.';

const baseProps = {
  size: 'base',
  disabled: false,
  label: 'OK'
}

describe('<Button />', () => {
  it('renders without error', () => {
    const wrapper = mount(
      <Button {...baseProps} />
    );

    expect(wrapper).toExist();
  });

  it('not re-render test', () => {
    const onClick = () => alert('Button clicked');

    const wrapper = shallow(<Button {...baseProps} onClick={onClick} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);

    expect(shouldUpdate).toBe(false);
  });

  it('re-render test by value', () => {
    const onClick = () => alert('Button clicked');

    const wrapper = shallow(<Button {...baseProps} onClick={onClick} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      label: "Cancel"
    });

    expect(shouldUpdate).toBe(true);
  });

  it('accepts id', () => {
    const wrapper = mount(
      <Button {...baseProps} id="testId" />
    );

    expect(wrapper.prop('id')).toEqual('testId');
  });

  it('accepts className', () => {
    const wrapper = mount(
      <Button {...baseProps} className="test" />
    );

    expect(wrapper.prop('className')).toEqual('test');
  });

  it('accepts style', () => {
    const wrapper = mount(
      <Button {...baseProps} style={{ color: 'red' }} />
    );

    expect(wrapper.getDOMNode().style).toHaveProperty('color', 'red');
  });

  it('render with hovered prop', () => {
    const wrapper = mount(
      <Button {...baseProps} hovered />
    );

    expect(wrapper.prop('hovered')).toEqual(true);
  });

  it('render with clicked prop', () => {
    const wrapper = mount(
      <Button {...baseProps} clicked />
    );

    expect(wrapper.prop('clicked')).toEqual(true);
  });

  it('render with disabled prop', () => {
    const wrapper = mount(
      <Button {...baseProps} disabled />
    );

    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('render with loaded prop', () => {
    const wrapper = mount(
      <Button {...baseProps} loaded />
    );

    expect(wrapper.prop('loaded')).toEqual(true);

    wrapper.setProps({primary: true});
    expect(wrapper.prop('primary')).toEqual(true);
    expect(wrapper.prop('loaded')).toEqual(true);
  });

  it('render with various size', () => {
    const wrapper = mount(
      <Button {...baseProps} />
    );

    wrapper.setProps({size: 'medium'});
    expect(wrapper.prop('size')).toEqual('medium');

    wrapper.setProps({size: 'big'});
    expect(wrapper.prop('size')).toEqual('big');

    wrapper.setProps({size: 'medium', primary: true});
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('primary')).toEqual(true);

    wrapper.setProps({size: 'big', primary: true});
    expect(wrapper.prop('size')).toEqual('big');
    expect(wrapper.prop('primary')).toEqual(true);

    wrapper.setProps({scale: true});
    expect(wrapper.prop('scale')).toEqual(true);
  });

  it('render with icon', () => {
    const icon = (<>1</>);
    const wrapper = mount(
      <Button {...baseProps} icon={icon} />
    );

    expect(wrapper.prop('icon')).toEqual(icon);

    wrapper.setProps({size: 'big', primary: true});
    expect(wrapper.prop('size')).toEqual('big');
    expect(wrapper.prop('primary')).toEqual(true);

    wrapper.setProps({size: 'medium', primary: true});
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('primary')).toEqual(true);
  });
});
