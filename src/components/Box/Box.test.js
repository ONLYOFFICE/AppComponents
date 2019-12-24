import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Box from ".";

describe("<Box />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Box />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Box id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("test css props", () => {
    const wrapper = mount(
      <Box
        tag="div"
        alignContent="start"
        alignItems="center"
        alignSelf="center"
        backgroundProp="yellow"
        borderProp={{
          style: "dashed solid double dotted",
          width: "2em 1rem 1px 2%",
          color: "red yellow green blue",
          radius: "10% 30% 50% 70%"
        }}
        flexBasis="auto"
        flexDirection="row"
        flexProp="none"
        flexWrap="nowrap"
        gridArea="inherit"
        heightProp="100px"
        justifyContent="left"
        justifyItems="left"
        justifySelf="left"
        marginProp="8px 8px 0 8px"
        overflowProp="hidden"
        paddingProp="16px"
        textAlign="left"
        widthProp="100px"
      />
    );

    expect(wrapper.props().tag).toEqual("div");
    expect(wrapper.props().alignContent).toEqual("start");
    expect(wrapper.props().alignItems).toEqual("center");
    expect(wrapper.props().alignSelf).toEqual("center");
    expect(wrapper.props().backgroundProp).toEqual("yellow");

    expect(typeof wrapper.props().borderProp).toEqual("object");
    expect(!!wrapper.props().borderProp.style).toEqual(true);
    expect(wrapper.props().borderProp.style).toEqual(
      "dashed solid double dotted"
    );
    expect(!!wrapper.props().borderProp.width).toEqual(true);
    expect(wrapper.props().borderProp.width).toEqual("2em 1rem 1px 2%");
    expect(!!wrapper.props().borderProp.color).toEqual(true);
    expect(wrapper.props().borderProp.color).toEqual("red yellow green blue");
    expect(!!wrapper.props().borderProp.radius).toEqual(true);
    expect(wrapper.props().borderProp.radius).toEqual("10% 30% 50% 70%");

    expect(wrapper.props().flexBasis).toEqual("auto");
    expect(wrapper.props().flexDirection).toEqual("row");
    expect(wrapper.props().flexProp).toEqual("none");
    expect(wrapper.props().flexWrap).toEqual("nowrap");
    expect(wrapper.props().gridArea).toEqual("inherit");
    expect(wrapper.props().heightProp).toEqual("100px");
    expect(wrapper.props().justifyContent).toEqual("left");
    expect(wrapper.props().justifyItems).toEqual("left");
    expect(wrapper.props().justifySelf).toEqual("left");
    expect(wrapper.props().marginProp).toEqual("8px 8px 0 8px");
    expect(wrapper.props().overflowProp).toEqual("hidden");
    expect(wrapper.props().paddingProp).toEqual("16px");
    expect(wrapper.props().textAlign).toEqual("left");
    expect(wrapper.props().widthProp).toEqual("100px");

    const wrapper2 = mount(<Box borderProp="1px solid" />);
    expect(typeof wrapper2.props().borderProp).toEqual("string");
    expect(wrapper2.props().borderProp).toEqual("1px solid");

    const wrapper3 = mount(<Box borderProp={{}} />);
    expect(typeof wrapper3.props().borderProp).toEqual("object");
    expect(!!wrapper3.props().borderProp.style).toEqual(false);
    expect(!!wrapper3.props().borderProp.width).toEqual(false);
    expect(!!wrapper3.props().borderProp.color).toEqual(false);
    expect(!!wrapper3.props().borderProp.radius).toEqual(false);
  });

  test("it applies styles", () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toHaveStyleRule("display", "block");

    const tree1 = renderer.create(<Box borderProp="1px solid red" />).toJSON();
    expect(tree1).toHaveStyleRule("border", "1px solid red");

    const tree2 = renderer
      .create(<Box borderProp={{ style: "solid" }} />)
      .toJSON();
    expect(tree2).toHaveStyleRule("border-style", "solid");

    const tree3 = renderer
      .create(<Box borderProp={{ width: "1px" }} />)
      .toJSON();
    expect(tree3).toHaveStyleRule("border-width", "1px");

    const tree4 = renderer
      .create(<Box borderProp={{ color: "red" }} />)
      .toJSON();
    expect(tree4).toHaveStyleRule("border-color", "red");

    const tree5 = renderer
      .create(<Box borderProp={{ radius: "5px" }} />)
      .toJSON();
    expect(tree5).toHaveStyleRule("border-radius", "5px");
  });
});
