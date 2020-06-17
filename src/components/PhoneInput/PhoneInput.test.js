import React from "react";
import { mount } from "enzyme";
import PhoneInput from ".";

const defaultProps = {
    locale: "RU",
    value: "12",
    onChange: jest.fn()
};
describe("<PhoneInput />", () => {

    it("component renders without error", () => {
        const wrapper = mount(
            <PhoneInput {...defaultProps} />
        );
        expect(wrapper).toExist();
    });

    it("input on change test", () => {
        const event = { target: { value: "value" } };
        const wrapper = mount(

            <PhoneInput {...defaultProps} />

        );
        const input = wrapper.find("input");
        input.simulate("change", event);
        expect(defaultProps.onChange).toHaveBeenCalled();
    });
    it("check open prop", () => {
        // const wrapper = mount(<DropDownItem {...baseProps} disabled />);
        const wrapper = mount(
            <PhoneInput open {...defaultProps} />
        );
        expect(wrapper.prop("open")).toEqual(true);
    });

    it('accepts locale', () => {
        const wrapper = mount(
            <PhoneInput locale="RU" />
        );
        expect(wrapper.prop('locale')).toEqual('RU');
    });
});