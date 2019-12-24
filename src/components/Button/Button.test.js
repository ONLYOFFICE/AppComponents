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

  it("render with loaded prop", () => {
    const wrapper = mount(<Button {...baseProps} loaded />);

    expect(wrapper.prop("loaded")).toEqual(true);

    wrapper.setProps({ primary: true });
    expect(wrapper.prop("primary")).toEqual(true);
    expect(wrapper.prop("loaded")).toEqual(true);
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

  it("render with icon", () => {
    const icon = <>icon</>;
    const wrapper = mount(<Button {...baseProps} icon={icon} />);

    expect(wrapper.prop("icon")).toEqual(icon);

    wrapper.setProps({ size: "big", primary: true });
    expect(wrapper.prop("size")).toEqual("big");
    expect(wrapper.prop("primary")).toEqual(true);

    wrapper.setProps({ size: "medium", primary: true });
    expect(wrapper.prop("size")).toEqual("medium");
    expect(wrapper.prop("primary")).toEqual(true);
  });

  test("it applies styles", () => {
    const tree = renderer
      .create(<Button {...baseProps} disabled primary />)
      .toJSON();

    expect(tree).toHaveStyleRule(
      "background-color",
      Base.button.disabledBackground
    );
  });

  test("big button padding styles", () => {
    const icon = <>icon</>;
    const tree = renderer
      .create(<Button size="big" primary label="button" icon={icon} />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.big.primaryWithLabel
    );

    const tree2 = renderer
      .create(<Button size="big" primary icon={icon} />)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.big.primaryWithoutLabel
    );

    const tree3 = renderer
      .create(<Button size="big" label="button" primary />)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.big.primaryWithoutIconLabel
    );

    const tree4 = renderer.create(<Button size="big" primary />).toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.big.primaryWithoutIcon
    );

    const tree5 = renderer
      .create(<Button size="big" label="button" icon={icon} />)
      .toJSON();
    expect(tree5).toHaveStyleRule(
      "padding",
      Base.button.padding.big.baseWithIconLabel
    );

    const tree6 = renderer.create(<Button size="big" icon={icon} />).toJSON();
    expect(tree6).toHaveStyleRule("padding", Base.button.padding.big.baseWithIcon);

    const tree7 = renderer
      .create(<Button size="big" label="button" />)
      .toJSON();
    expect(tree7).toHaveStyleRule(
      "padding",
      Base.button.padding.big.baseWithoutIconLabel
    );

    const tree8 = renderer.create(<Button size="big" />).toJSON();
    expect(tree8).toHaveStyleRule("padding", Base.button.padding.big.baseWithoutIcon);
  });

  test("medium button padding styles", () => {
    const icon = <>icon</>;
    const tree = renderer
      .create(<Button size="medium" primary label="button" icon={icon} />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.primaryWithLabel
    );

    const tree2 = renderer
      .create(<Button size="medium" primary icon={icon} />)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.primaryWithoutLabel
    );

    const tree3 = renderer
      .create(<Button size="medium" label="button" primary />)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.primaryWithoutIconLabel
    );

    const tree4 = renderer.create(<Button size="medium" primary />).toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.primaryWithoutIcon
    );

    const tree5 = renderer
      .create(<Button size="medium" label="button" icon={icon} />)
      .toJSON();
    expect(tree5).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.baseWithIconLabel
    );

    const tree6 = renderer
      .create(<Button size="medium" icon={icon} />)
      .toJSON();
    expect(tree6).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.baseWithIcon
    );

    const tree7 = renderer
      .create(<Button size="medium" label="button" />)
      .toJSON();
    expect(tree7).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.baseWithoutIconLabel
    );

    const tree8 = renderer.create(<Button size="medium" />).toJSON();
    expect(tree8).toHaveStyleRule(
      "padding",
      Base.button.padding.medium.baseWithoutIcon
    );
  });

  test("base button padding styles", () => {
    const icon = <>icon</>;
    const tree = renderer
      .create(<Button size="base" primary label="button" icon={icon} />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "padding",
      Base.button.padding.base.primaryWithLabel
    );

    const tree2 = renderer
      .create(<Button size="base" primary icon={icon} />)
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "padding",
      Base.button.padding.base.primaryWithoutLabel
    );

    const tree3 = renderer
      .create(<Button size="base" label="button" primary />)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "padding",
      Base.button.padding.base.primaryWithoutIconLabel
    );

    const tree4 = renderer.create(<Button size="base" primary />).toJSON();
    expect(tree4).toHaveStyleRule(
      "padding",
      Base.button.padding.base.primaryWithoutIcon
    );

    const tree5 = renderer
      .create(<Button size="base" label="button" icon={icon} />)
      .toJSON();
    expect(tree5).toHaveStyleRule(
      "padding",
      Base.button.padding.base.baseWithIconLabel
    );

    const tree6 = renderer.create(<Button size="base" icon={icon} />).toJSON();
    expect(tree6).toHaveStyleRule("padding", Base.button.padding.base.baseWithIcon);

    const tree7 = renderer
      .create(<Button size="base" label="button" />)
      .toJSON();
    expect(tree7).toHaveStyleRule(
      "padding",
      Base.button.padding.base.baseWithoutIconLabel
    );

    const tree8 = renderer.create(<Button size="base" />).toJSON();
    expect(tree8).toHaveStyleRule("padding", Base.button.padding.base.baseWithoutIcon);
  });
});
