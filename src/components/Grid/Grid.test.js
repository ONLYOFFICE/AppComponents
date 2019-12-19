import React from 'react';
import { mount } from 'enzyme';
import Grid from '.';

describe('<Grid />', () => {
  it('renders without error', () => {
    const wrapper = mount(
      <Grid />
    );

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Grid id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("test css props", () => {
    const wrapper = mount(
      <Grid
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        areasProp={[
          { name: "header", start: [0, 0], end: [2, 0] },
          { name: "navbar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
          { name: "sidebar", start: [2, 1], end: [2, 1] },
          { name: "footer", start: [0, 2], end: [2, 2] }
        ]}
        columnsProp={[["100px","1fr"], "3fr", ["100px","1fr"]]}
        gridArea="grid"
        gridColumnGap="10px"
        gridGap="10px"
        gridRowGap="10px"
        heightProp="100vh"
        justifyContent="center"
        justifyItems="center"
        justifySelf="center"
        marginProp="10px"
        paddingProp="10px"
        rowsProp={["auto", "1fr", "auto"]}
        tag="div"
        widthProp="100vw"
      />
    );

    
    expect(wrapper.props().alignContent).toEqual("center");
    expect(wrapper.props().alignItems).toEqual("center");
    expect(wrapper.props().alignSelf).toEqual("center");

    expect(Array.isArray(wrapper.props().areasProp)).toEqual(true);
    expect(wrapper.props().areasProp.length).toEqual(5);

    expect(wrapper.props().areasProp[0].name).toEqual("header");
    expect(Array.isArray(wrapper.props().areasProp[0].start)).toEqual(true);
    expect(wrapper.props().areasProp[0].start.length).toEqual(2);
    expect(wrapper.props().areasProp[0].start[0]).toEqual(0);
    expect(wrapper.props().areasProp[0].start[1]).toEqual(0);
    expect(Array.isArray(wrapper.props().areasProp[0].end)).toEqual(true);
    expect(wrapper.props().areasProp[0].end.length).toEqual(2);
    expect(wrapper.props().areasProp[0].end[0]).toEqual(2);
    expect(wrapper.props().areasProp[0].end[1]).toEqual(0);

    expect(wrapper.props().areasProp[1].name).toEqual("navbar");
    expect(Array.isArray(wrapper.props().areasProp[1].start)).toEqual(true);
    expect(wrapper.props().areasProp[1].start.length).toEqual(2);
    expect(wrapper.props().areasProp[1].start[0]).toEqual(0);
    expect(wrapper.props().areasProp[1].start[1]).toEqual(1);
    expect(Array.isArray(wrapper.props().areasProp[1].end)).toEqual(true);
    expect(wrapper.props().areasProp[1].end.length).toEqual(2);
    expect(wrapper.props().areasProp[1].end[0]).toEqual(0);
    expect(wrapper.props().areasProp[1].end[1]).toEqual(1);

    expect(wrapper.props().areasProp[2].name).toEqual("main");
    expect(Array.isArray(wrapper.props().areasProp[2].start)).toEqual(true);
    expect(wrapper.props().areasProp[2].start.length).toEqual(2);
    expect(wrapper.props().areasProp[2].start[0]).toEqual(1);
    expect(wrapper.props().areasProp[2].start[1]).toEqual(1);
    expect(Array.isArray(wrapper.props().areasProp[2].end)).toEqual(true);
    expect(wrapper.props().areasProp[2].end.length).toEqual(2);
    expect(wrapper.props().areasProp[2].end[0]).toEqual(1);
    expect(wrapper.props().areasProp[2].end[1]).toEqual(1);

    expect(wrapper.props().areasProp[3].name).toEqual("sidebar");
    expect(Array.isArray(wrapper.props().areasProp[3].start)).toEqual(true);
    expect(wrapper.props().areasProp[3].start.length).toEqual(2);
    expect(wrapper.props().areasProp[3].start[0]).toEqual(2);
    expect(wrapper.props().areasProp[3].start[1]).toEqual(1);
    expect(Array.isArray(wrapper.props().areasProp[3].end)).toEqual(true);
    expect(wrapper.props().areasProp[3].end.length).toEqual(2);
    expect(wrapper.props().areasProp[3].end[0]).toEqual(2);
    expect(wrapper.props().areasProp[3].end[1]).toEqual(1);

    expect(wrapper.props().areasProp[4].name).toEqual("footer");
    expect(Array.isArray(wrapper.props().areasProp[4].start)).toEqual(true);
    expect(wrapper.props().areasProp[4].start.length).toEqual(2);
    expect(wrapper.props().areasProp[4].start[0]).toEqual(0);
    expect(wrapper.props().areasProp[4].start[1]).toEqual(2);
    expect(Array.isArray(wrapper.props().areasProp[4].end)).toEqual(true);
    expect(wrapper.props().areasProp[4].end.length).toEqual(2);
    expect(wrapper.props().areasProp[4].end[0]).toEqual(2);
    expect(wrapper.props().areasProp[4].end[1]).toEqual(2);

    expect(Array.isArray(wrapper.props().columnsProp)).toEqual(true);
    expect(wrapper.props().columnsProp.length).toEqual(3);

    expect(wrapper.props().gridArea).toEqual("grid");
    expect(wrapper.props().gridColumnGap).toEqual("10px");
    expect(wrapper.props().gridGap).toEqual("10px");
    expect(wrapper.props().gridRowGap).toEqual("10px");
    expect(wrapper.props().heightProp).toEqual("100vh");
    expect(wrapper.props().justifyContent).toEqual("center");
    expect(wrapper.props().justifyItems).toEqual("center");
    expect(wrapper.props().justifySelf).toEqual("center");
    expect(wrapper.props().marginProp).toEqual("10px");
    expect(wrapper.props().paddingProp).toEqual("10px");

    expect(Array.isArray(wrapper.props().rowsProp)).toEqual(true);
    expect(wrapper.props().rowsProp.length).toEqual(3);

    expect(wrapper.props().tag).toEqual("div");
    expect(wrapper.props().widthProp).toEqual("100vw");


    const wrapper2 = mount(<Grid columnsProp={{ count: 3, size: "100px" }} />);
    expect(typeof wrapper.props().columnsProp).toEqual("object");
    expect(wrapper2.props().columnsProp.count).toEqual(3);
    expect(wrapper2.props().columnsProp.size).toEqual("100px");

    const wrapper3 = mount(<Grid columnsProp="25%" />);
    expect(typeof wrapper3.props().columnsProp).toEqual("string");
    expect(wrapper3.props().columnsProp).toEqual("25%");

    const wrapper4 = mount(<Grid rowsProp="50px" />);
    expect(typeof wrapper4.props().rowsProp).toEqual("string");
    expect(wrapper4.props().rowsProp).toEqual("50px");

    const wrapper5 = mount(<Grid areasProp={[
      ["header", "header", "header"],
      ["navbar", "main", "sidebar"],
      ["footer", "footer", "footer"]
    ]} />);
    expect(Array.isArray(wrapper5.props().areasProp)).toEqual(true);
    expect(wrapper5.props().areasProp.length).toEqual(3);
    expect(Array.isArray(wrapper5.props().areasProp[0])).toEqual(true);
    expect(wrapper5.props().areasProp[0].length).toEqual(3);
    expect(wrapper5.props().areasProp[0][0]).toEqual("header");
    expect(wrapper5.props().areasProp[0][1]).toEqual("header");
    expect(wrapper5.props().areasProp[0][2]).toEqual("header");
    expect(Array.isArray(wrapper5.props().areasProp[1])).toEqual(true);
    expect(wrapper5.props().areasProp[1].length).toEqual(3);
    expect(wrapper5.props().areasProp[1][0]).toEqual("navbar");
    expect(wrapper5.props().areasProp[1][1]).toEqual("main");
    expect(wrapper5.props().areasProp[1][2]).toEqual("sidebar");
    expect(Array.isArray(wrapper5.props().areasProp[2])).toEqual(true);
    expect(wrapper5.props().areasProp[2].length).toEqual(3);
    expect(wrapper5.props().areasProp[2][0]).toEqual("footer");
    expect(wrapper5.props().areasProp[2][1]).toEqual("footer");
    expect(wrapper5.props().areasProp[2][2]).toEqual("footer");
  });

});