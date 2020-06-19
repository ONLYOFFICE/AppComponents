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

    // it('set search', () => {
    //     const wrapper = mount(
    //         <PhoneInput />
    //     );
    //     const searchInput = wrapper.find('TextInput');
    //     expect(searchInput).toEqual();
    // });

    it("check open prop", () => {
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

    it('accepts width', () => {
        const wrapper = mount(
            <PhoneInput width="304px" />
        );
        expect(wrapper.prop('width')).toEqual('304px');
    });

    it('accepts item hover color', () => {
        const wrapper = mount(
            <PhoneInput itemHoverColor="#fff" />
        );
        expect(wrapper.prop('itemHoverColor')).toEqual('#fff');
    });

    it('accepts item background color', () => {
        const wrapper = mount(
            <PhoneInput itemBackgroundColor="#fff" />
        );
        expect(wrapper.prop('itemBackgroundColor')).toEqual('#fff');
    });

    it('accepts placeholder color', () => {
        const wrapper = mount(
            <PhoneInput placeholderColor="#fff" />
        );
        expect(wrapper.prop('placeholderColor')).toEqual('#fff');
    });
});