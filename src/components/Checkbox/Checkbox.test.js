import React from "react";
import { mount, shallow } from "enzyme";
import Checkbox from ".";

const baseProps = {
  label: "checkbox",
  onChange: jest.fn()
};

describe("<Checkbox />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Checkbox {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Checkbox
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

  it("accepts disabled", () => {
    const wrapper = mount(<Checkbox {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("accepts indeterminate", () => {
    const wrapper = mount(<Checkbox {...baseProps} indeterminate />);

    expect(wrapper.prop("indeterminate")).toEqual(true);
  });

  it("accepts checked", () => {
    const wrapper = mount(<Checkbox {...baseProps} checked />);

    expect(wrapper.prop("checked")).toEqual(true);
  });

  it("accepts checked and disabled", () => {
    const wrapper = mount(<Checkbox {...baseProps} checked disabled />);

    expect(wrapper.prop("checked")).toEqual(true);
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(<Checkbox {...baseProps} />).instance();

    wrapper.componentDidUpdate({ checked: true }, wrapper.state);
    expect(wrapper.props).toBe(wrapper.props);

    wrapper.componentDidUpdate({ checked: false }, wrapper.state);
    expect(wrapper.props).toBe(wrapper.props);
  });
});
