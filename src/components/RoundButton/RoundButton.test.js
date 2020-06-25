import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import RoundButton from ".";

const baseProps = {
  disabled: false
};

describe("<RoundButton />", () => {
  it("renders without error", () => {
    const wrapper = mount(<RoundButton {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("not re-render test", () => {
    const onClick = () => alert("RoundButton clicked");

    const wrapper = shallow(
      <RoundButton {...baseProps} onClick={onClick} />
    ).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);

    expect(shouldUpdate).toBe(false);
  });

  it("render with disabled prop", () => {
    const wrapper = mount(<RoundButton {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("render with plus prop", () => {
    const wrapper = mount(<RoundButton {...baseProps} plus />);

    expect(wrapper.prop("plus")).toEqual(true);
  });
  it("render with minus prop", () => {
    const wrapper = mount(<RoundButton {...baseProps} minus />);

    expect(wrapper.prop("minus")).toEqual(true);
  });

});
