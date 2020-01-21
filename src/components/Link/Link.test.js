import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Link from ".";
import { Base } from "../../themes";

describe("<Link />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Link>link</Link>);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Link id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("with bold prop", () => {
    const wrapper = mount(<Link bold />);

    expect(wrapper.prop("bold")).toEqual(true);
  });

  it("with hovered prop", () => {
    const wrapper = mount(<Link hovered />);

    expect(wrapper.prop("hovered")).toEqual(true);
  });

  test("test hovered props styles", () => {
    const tree = renderer
      .create(
        <Link hovered type="page">
          Some text
        </Link>
      )
      .toJSON();
    expect(tree).toHaveStyleRule(
      "text-decoration",
      Base.link.hover.page.textDecoration
    );

    const tree2 = renderer
      .create(
        <Link hovered type="action">
          Some text
        </Link>
      )
      .toJSON();
    expect(tree2).toHaveStyleRule(
      "text-decoration",
      Base.link.hover.textDecoration
    );
  });

  test("test textOverflow styles", () => {
    const tree = renderer.create(<Link textOverflow>Some text</Link>).toJSON();

    expect(tree).toHaveStyleRule("display", "inline-block");
    expect(tree).toHaveStyleRule("max-width", "100%");
  });

  test("test color style", () => {
    const tree = renderer.create(<Link>Some text</Link>).toJSON();

    expect(tree).toHaveStyleRule("color", Base.link.color);

    const tree2 = renderer.create(<Link color="red">Some text</Link>).toJSON();

    expect(tree2).toHaveStyleRule("color", "red");
  });

  it("with semitransparent prop", () => {
    const wrapper = mount(<Link semitransparent />);

    expect(wrapper.prop("semitransparent")).toEqual(true);
  });

  test("test semitransparent styles", () => {
    const tree = renderer
      .create(<Link semitransparent>Some text</Link>)
      .toJSON();

    expect(tree).toHaveStyleRule("opacity", Base.link.opacity);
  });

  it("with type prop action", () => {
    const wrapper = mount(<Link type="action" />);

    expect(wrapper.prop("type")).toEqual("action");
  });

  test("test hover css with type no page", () => {
    const tree = renderer.create(<Link type="page">Some text</Link>).toJSON();

    expect(tree).toHaveStyleRule(
      "text-decoration",
      Base.link.hover.page.textDecoration,
      { modifier: ":hover" }
    );
  });

  test("test hover css with page type", () => {
    const tree = renderer.create(<Link type="action">Some text</Link>).toJSON();

    expect(tree).toHaveStyleRule(
      "text-decoration",
      Base.link.hover.textDecoration,
      { modifier: ":hover" }
    );
  });
});
