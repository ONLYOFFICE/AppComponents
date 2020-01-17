import React from "react";
import { mount } from "enzyme";
import TextArea from ".";

const baseProps = {
  onChange: jest.fn(),
  value: "value",
  placeholder: "Add comment"
};
describe("<TextArea />", () => {
  it("renders without error", () => {
    const wrapper = mount(<TextArea {...baseProps} />);

    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <TextArea
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
});
