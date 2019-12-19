import React from "react";
import { mount } from "enzyme";
import { Icons } from ".";

describe("<Icons />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Icons.AZSortingIcon />);

    expect(wrapper).toExist();
  });

  it("size small", () => {
    const wrapper = mount(<Icons.AZSortingIcon size="small" />);

    expect(wrapper.prop("size")).toBe("small");
  });

  it("size medium", () => {
    const wrapper = mount(<Icons.AZSortingIcon size="medium" />);

    expect(wrapper.prop("size")).toBe("medium");
  });

  it("size big", () => {
    const wrapper = mount(<Icons.AZSortingIcon size="big" />);

    expect(wrapper.prop("size")).toBe("big");
  });

  it("size scale", () => {
    const wrapper = mount(<Icons.AZSortingIcon size="scale" />);

    expect(wrapper.prop("size")).toBe("scale");
  });

  it("fill prop", () => {
    const wrapper = mount(<Icons.AZSortingIcon fill />);

    expect(wrapper.prop("fill")).toBe(true);
  });

  it("stroke prop", () => {
    const wrapper = mount(<Icons.AZSortingIcon stroke />);

    expect(wrapper.prop("stroke")).toBe(true);
  });
});
