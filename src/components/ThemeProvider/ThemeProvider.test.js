import React from "react";
import { mount } from "enzyme";
import ThemeProvider from ".";

const theme = {
  color: "#333",
  backgroundColor: "#fff"
};

describe("Weekdays tests:", () => {
  it("ThemeProvider renders without error", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <label>label</label>
      </ThemeProvider>
    );
    expect(wrapper).toExist();
  });
});
