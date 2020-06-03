import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Slider from ".";
import {Arrow} from './StyledSlider';

const baseProps = {
  disabled: false,
  value: 5,
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

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    wrapper.componentDidUpdate({ value: 8 });
    expect(wrapper.props).toBe(wrapper.props);
    expect(parseInt(wrapper.state.value)).toBe(wrapper.props.value);
  });

  it("accepts disabled", () => {
    const wrapper = mount(<Slider {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("onChangeHandler() test", () => {
    const event = { target: { value: 25 }};
    const wrapper1 = mount(<Slider {...baseProps} />);

    const input = wrapper1.find('input[type="range"]');
    input.simulate("change", event);
    expect(baseProps.onChange).toHaveBeenCalled();
    expect(wrapper1.state.value).toBe(wrapper1.props.value);
  });

  it('onRight() test', () => {
    const wrapper = shallow(<Slider {...baseProps} value={22}/>).instance();

    wrapper.onRight();
    expect(wrapper.state.value).toBe("23");
  });

  it('onLeft() test', () => {
    const wrapper = shallow(<Slider {...baseProps} value={22}/>).instance();

    wrapper.onLeft();
    expect(wrapper.state.value).toBe("21");
  });

  it('onKeyUpHandler() test', () => {
    Object.defineProperty(
      window.navigator, 
      'userAgent', 
      {value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15" }
    )
    const wrapper = shallow(<Slider {...baseProps} value={22}/>).instance();

    let event = { key: "ArrowRight" };
    wrapper.onKeyUpHandler(event);
    expect(wrapper.state.value).toBe("23");

    event = { key: "ArrowUp" };
    wrapper.onKeyUpHandler(event);
    expect(wrapper.state.value).toBe("24");

    event = { key: "ArrowLeft" };
    wrapper.onKeyUpHandler(event);
    expect(wrapper.state.value).toBe("23");

    event = { key: "ArrowDown" };
    wrapper.onKeyUpHandler(event);
    expect(wrapper.state.value).toBe("22");
  });

  it('max value test', () => {
    const wrapper = shallow(<Slider {...baseProps} value={30}/>).instance();
    
    wrapper.onRight();
    expect(wrapper.state.value).toBe("30");
  });
  
  it('min value test', () => {
    const wrapper = shallow(<Slider {...baseProps} value={0}/>).instance();

    wrapper.onLeft();
    expect(wrapper.state.value).toBe("0");
  });

  it('onFocusHandler() and onBlurHandler() test', () => {
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    wrapper.onFocusHandler();
    expect(wrapper.state.focus).toBe(true);

    wrapper.onBlurHandler();
    expect(wrapper.state.focus).toBe(false);
  });

  it("checkingValueProps() test", () => {
    const value = 25;
    const value2 = -25;
    const wrapper = shallow(<Slider {...baseProps} />).instance();

    const result = wrapper.checkingValueProps(value);
    expect(result).toBe("25");

    const result2 = wrapper.checkingValueProps(value2);
    expect(result2).toBe("0");
  });

  it("test focus css", () => {
    const tree = renderer
      .create(<Slider {...baseProps} />)
      .toJSON();

    expect(tree.children[0]).toHaveStyleRule("visibility", "hidden");
    expect(tree.children[2]).toHaveStyleRule("transform", "rotate(-45deg)");
    expect(tree.children[0]).toHaveStyleRule("transform", "rotate(135deg)");

    const tree1 = renderer
      .create(<Arrow focus={true} />)
      .toJSON();
      expect(tree1).toHaveStyleRule("visibility", "visible");
  });
}) 