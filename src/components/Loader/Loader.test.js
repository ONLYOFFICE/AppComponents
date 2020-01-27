import React from "react";
import { mount } from "enzyme";
import Loader from ".";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Base } from "../../themes";
import { Oval } from "./Oval";
import { DualRing } from "./DualRing";

describe("<Loader />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Loader />);

    expect(wrapper).toExist();
  });

  it("test dual-ring type", () => {
    const wrapper = mount(<Loader type="dual-ring" />);

    expect(wrapper.prop("type")).toEqual("dual-ring");
  });

  it("test oval type", () => {
    const wrapper = mount(<Loader type="oval" />);

    expect(wrapper.prop("type")).toEqual("oval");
  });

  it("test base type", () => {
    const wrapper = mount(<Loader type="base" />);

    expect(wrapper.prop("type")).toEqual("base");
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Loader id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("test oval fill-color", () => {
    const wrapper = mount(<Oval fillColor="red" />);

    expect(wrapper.prop("fillColor")).toEqual("red");
  });

  test("text oval styles", () => {
    const tree = renderer.create(<Oval size="30px" color="red" />).toJSON();

    expect(tree).toHaveStyleRule("width", "30px");
    expect(tree).toHaveStyleRule("height", "30px");
    expect(tree).toHaveStyleRule("stroke", "red");

    const tree2 = renderer.create(<Oval />).toJSON();

    expect(tree2).toHaveStyleRule("width", Base.loader.size);
    expect(tree2).toHaveStyleRule("height", Base.loader.size);
    expect(tree2).toHaveStyleRule("stroke", Base.loader.color);
  });

  test("text dual-ring styles", () => {
    const tree = renderer.create(<DualRing size="30px" color="red" />).toJSON();

    expect(tree).toHaveStyleRule("width", "30px");
    expect(tree).toHaveStyleRule("height", "30px");
    expect(tree).toHaveStyleRule("stroke", "red");

    const tree2 = renderer.create(<DualRing />).toJSON();

    expect(tree2).toHaveStyleRule("width", Base.loader.size);
    expect(tree2).toHaveStyleRule("height", Base.loader.size);
    expect(tree2).toHaveStyleRule("stroke", Base.loader.color);

    const tree3 = renderer
      .create(
        <DualRing>
          <circle />
        </DualRing>
      )
      .toJSON();
    expect(tree3).toHaveStyleRule("stroke", Base.loader.color);

    const tree4 = renderer
      .create(
        <DualRing color="red">
          <circle />
        </DualRing>
      )
      .toJSON();
    expect(tree4).toHaveStyleRule("stroke", "red");
  });
});
