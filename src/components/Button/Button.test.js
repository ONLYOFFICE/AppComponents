import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Button from ".";
import { Base } from "../../themes/index";

const baseProps = {
  size: "base",
  disabled: false,
  label: "OK"
};

describe("<Button />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Button {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("not re-render test", () => {
    const onClick = () => alert("Button clicked");

    const wrapper = shallow(
      <Button {...baseProps} onClick={onClick} />
    ).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);

    expect(shouldUpdate).toBe(false);
  });

  it("re-render test by value", () => {
    const onClick = () => alert("Button clicked");

    const wrapper = shallow(
      <Button {...baseProps} onClick={onClick} />
    ).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      label: "Cancel"
    });

    expect(shouldUpdate).toBe(true);
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Button id="testId" className="test" style={{ color: "red" }}>
        Some text
      </Button>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("render with disabled prop", () => {
    const wrapper = mount(<Button {...baseProps} disabled />);

    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("render with various size", () => {
    const wrapper = mount(<Button {...baseProps} />);

    wrapper.setProps({ size: "medium" });
    expect(wrapper.prop("size")).toEqual("medium");

    wrapper.setProps({ size: "big" });
    expect(wrapper.prop("size")).toEqual("big");

    wrapper.setProps({ size: "medium", primary: true });
    expect(wrapper.prop("size")).toEqual("medium");
    expect(wrapper.prop("primary")).toEqual(true);

    wrapper.setProps({ size: "big", primary: true });
    expect(wrapper.prop("size")).toEqual("big");
    expect(wrapper.prop("primary")).toEqual(true);

    wrapper.setProps({ scale: true });
    expect(wrapper.prop("scale")).toEqual(true);
  });

  test("it applies styles", () => {
    const tree = renderer
      .create(<Button {...baseProps} disabled primary />)
      .toJSON();

    expect(tree).toHaveStyleRule(
      "background-color",
      Base.button.backgroundColor.primaryDisabled
    );
  });

  test("big button padding styles", () => {
    const tree = renderer
      .create(<Button size="big"/>)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.big
    );

    const tree2 = renderer
      .create(<Button size="big" primary/>)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.big
    );

    const tree3 = renderer
      .create(<Button size="big" primary disabled/>)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.big
    );

    const tree4 = renderer
      .create(<Button size="big" primary disabled label="button"/>)
      .toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.big
    );
  });

  test("medium button padding styles", () => {
    const tree = renderer
      .create(<Button size="medium"/>)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.medium
    );

    const tree2 = renderer
      .create(<Button size="medium" primary/>)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.medium
    );

    const tree3 = renderer
      .create(<Button size="medium" primary disabled/>)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.medium
    );

    const tree4 = renderer
      .create(<Button size="medium" primary disabled label="button"/>)
      .toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.medium
    );
  });

  test("base button padding styles", () => {
    const tree = renderer
      .create(<Button/>)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.base
    );

    const tree2 = renderer
      .create(<Button size="base"/>)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.base
    );

    const tree3 = renderer
      .create(<Button size="base" primary/>)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.base
    );

    const tree4 = renderer
      .create(<Button size="base" primary disabled/>)
      .toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.base
    );

    const tree5 = renderer
      .create(<Button size="base" primary disabled label="button"/>)
      .toJSON();
    expect(tree5).toHaveStyleRule(
      "padding",
      Base.button.padding.base
    );
  });
});
