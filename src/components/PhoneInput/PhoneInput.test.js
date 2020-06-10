import React from "react";
import { mount } from "enzyme";
import PhoneInput from ".";

describe("<PhoneInput />", () => {
    it("component renders without error", () => {
        const wrapper = mount(<PhoneInput locale="RU" width="304px" onChange={() => console.log("It's alive")} />);
        expect(wrapper).toExist();
    });
});