import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Text from ".";
import ThemeProvider from "../ThemeProvider";
import { Base } from "../../themes/index";

describe("<Text />", () => {
  it("renders without error", () => {
    const wrapper = mount(
      <Text as="p" title="Some title">
        Some text
      </Text>
    );

    expect(wrapper).toExist();
  });

  it("Text tag test", () => {
    const wrapper2 = mount(<Text tag="div">Some text</Text>);
    expect(wrapper2.props().tag).toEqual("div");
  });

  it("test css props", () => {
    const wrapper = mount(
      <Text
        color="red"
        backgroundColor="#333"
        display="contents"
        tag="div"
        fontWeight={700}
        truncate
        fontSize="13px"
        italic
      >
        Some text
      </Text>
    );

    expect(wrapper.props().color).toEqual("red");
    expect(wrapper.props().display).toEqual("contents");
    expect(wrapper.props().backgroundColor).toEqual("#333");
    expect(wrapper.props().tag).toEqual("div");
    expect(wrapper.props().fontWeight).toEqual(700);
    expect(wrapper.props().truncate).toEqual(true);
    expect(wrapper.props().fontSize).toEqual("13px");

    const wrapper2 = mount(
      <Text inline bold>
        Some text
      </Text>
    );
    expect(wrapper2.props().inline).toEqual(true);
  });

  test("it applies styles", () => {
    const tree = renderer
      .create(
        <Text
          color="red"
          backgroundColor="#fff"
          display="contents"
          fontWeight={300}
          truncate
          fontSize="13px"
          italic
        >
          Some text
        </Text>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("color", "red");
    expect(tree).toHaveStyleRule("background-color", "#fff");
    expect(tree).toHaveStyleRule("display", "contents");
    expect(tree).toHaveStyleRule("font-weight", "300");

    expect(tree).toHaveStyleRule("white-space", "nowrap");
    expect(tree).toHaveStyleRule("overflow", "hidden");
    expect(tree).toHaveStyleRule("text-overflow", "ellipsis");

    expect(tree).toHaveStyleRule("font-size", "13px");
    expect(tree).toHaveStyleRule("font-style", "italic");

    const tree2 = renderer
      .create(
        <Text inline bold>
          Some text
        </Text>
      )
      .toJSON();

    expect(tree2).toHaveStyleRule("font-weight", "700");
    expect(tree2).toHaveStyleRule("display", "inline-block");

    const tree3 = renderer
      .create(
        <ThemeProvider theme={Base}>
          <Text>Some text</Text>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree3).toHaveStyleRule("color", Base.text.color);
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Text id="testId" className="test" style={{ color: "red" }}>
        Some text
      </Text>
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });
});
