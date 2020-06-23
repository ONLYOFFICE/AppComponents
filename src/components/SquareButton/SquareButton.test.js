import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import SquareButton from ".";

const baseProps = {
  disabled: false
};

describe("<SquareButton />", () => {
  it("renders without error", () => {
    const wrapper = mount(<SquareButton {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("not re-render test", () => {
    const onClick = () => alert("SquareButton clicked");

    const wrapper = shallow(
      <SquareButton {...baseProps} onClick={onClick} />
    ).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);

    expect(shouldUpdate).toBe(false);
  });

  it("render with disabled prop", () => {
    const wrapper = mount(<SquareButton {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

});
