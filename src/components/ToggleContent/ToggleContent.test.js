import React from "react";
import { mount, shallow } from "enzyme";
import ToggleContent from ".";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Base } from "../../themes";
import { StyledContent, StyledArrow } from "./StyledToggleContent";

describe("<ToggleContent />", () => {
  it("renders without error", () => {
    const wrapper = mount(
      <ToggleContent>
        <span>Some text</span>
      </ToggleContent>
    );

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <ToggleContent id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  test("Test ToggleContent styles", () => {
    const tree = renderer
      .create(
        <StyledContent open>
          <div>content</div>
        </StyledContent>
      )
      .toJSON();

    expect(tree).toHaveStyleRule("display", "block");

    const tree2 = renderer
      .create(
        <StyledContent open={false}>
          <div>content</div>
        </StyledContent>
      )
      .toJSON();

    expect(tree2).toHaveStyleRule("display", "none");

    const tree3 = renderer
      .create(
        <StyledArrow open>
          <div>content</div>
        </StyledArrow>
      )
      .toJSON();

    expect(tree3).toHaveStyleRule("transform", Base.toggleContent.transform);
  });

  it("componentDidUpdate() props lifecycle test", () => {
    const wrapper = shallow(
      <ToggleContent>
        <span>Some text</span>
      </ToggleContent>
    ).instance();

    wrapper.componentDidUpdate({ open: true });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.open).toEqual(wrapper.props.open);

    wrapper.componentDidUpdate({ open: true });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.open).toEqual(wrapper.props.open);

    wrapper.componentDidUpdate({ open: false });
    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state.open).toEqual(wrapper.props.open);
  });

  it("onToggleClick test", () => {
    const wrapper = mount(
      <ToggleContent>
        <span>Some text</span>
      </ToggleContent>
    );

    const input = wrapper.find(".span-toggle-content");
    input.simulate("click");
    expect(wrapper.state("open")).toEqual(true);

    input.simulate("click");
    expect(wrapper.state("open")).toEqual(false);
  });
});
