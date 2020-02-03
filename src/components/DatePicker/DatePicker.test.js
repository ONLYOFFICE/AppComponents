import React from "react";
import { mount, shallow } from "enzyme";
import DatePicker from ".";
import moment from "moment";

const selectedDate = new Date("09/12/2019");
const minDate = new Date("01/01/1970");
const maxDate = new Date("01/01/2020");

describe("DatePicker tests", () => {
  it("DatePicker renders without error", () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper).toExist();
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <DatePicker id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("DatePicker renders with open prop", () => {
    const wrapper = mount(<DatePicker open />);
    expect(wrapper).toExist();
  });

  it("DatePicker componentDidUpdate() lifecycle test", () => {
    const wrapper = mount(<DatePicker />).instance();
    //wrapper.componentDidUpdate(wrapper.props, wrapper.state);
    //
    //expect(wrapper.props).toBe(wrapper.props);
    //expect(wrapper.state).toBe(wrapper.state);

    //Test error date function
    //        const date = new Date();
    //        date.setFullYear(1);
    //
    //        wrapper.componentDidUpdate({ selectedDate: date }, wrapper.state);
    //        expect(wrapper.state.error).toBe(true);
    //Test error date function

    wrapper.componentDidUpdate({ locale: "en" }, wrapper.state);
    expect(wrapper.state.value).toBe(moment(new Date()).format("L"));

    wrapper.componentDidUpdate({ open: false }, wrapper.state);
    expect(wrapper.state.open).toBe(wrapper.props.open);
    wrapper.componentDidUpdate({ open: true }, wrapper.state);
    expect(wrapper.state.open).toBe(wrapper.props.open);

    wrapper.componentDidUpdate({ error: true }, wrapper.state);
    expect(wrapper.state.error).toBe(wrapper.props.error);
    expect(wrapper.state.open).toBe(false);

    wrapper.componentDidUpdate({ selectedDate: new Date() }, wrapper.state);
    expect(wrapper.state.selectedDate).toStrictEqual(
      moment(wrapper.props.selectedDate).toDate()
    );
    expect(wrapper.state.value).toBe(
      moment(wrapper.props.selectedDate).format("L")
    );
  });

  /*it("DatePicker renders with open prop", () => {
    const wrapper = mount(
      <DatePicker
        selectedDate={new Date("01/01/1999")}
        minDate={new Date("01/01/2000")}
        maxDate={new Date("01/01/2020")}
        error={false}
      />
    );
    expect(wrapper).toExist();
  });*/

  //const state = { value: "01/01/2000", error: true };
  //expect(wrapper.state.error).toBe(false);
  //expect(wrapper.state.open).toBe(false);

  it("DatePicker check Compare date function", () => {
    const date = new Date();
    const errorDate = new Date("01/01/3000");
    const wrapper = shallow(<DatePicker />).instance();
    expect(wrapper.compareDate(date)).toEqual(true);
    expect(wrapper.compareDate(errorDate)).toEqual(false);
  });

  it("componentWillUnmount() lifecycle  test", () => {
    const wrapper = mount(<DatePicker open />);
    const componentWillUnmount = jest.spyOn(
      wrapper.instance(),
      "componentWillUnmount"
    );

    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it("DatePicker check is valid dates function", () => {
    var date = new Date();
    date.setFullYear(1);
    const wrapper = shallow(<DatePicker />).instance();
    expect(wrapper.isValidDate(selectedDate, maxDate, minDate, false)).toEqual(
      false
    );
    expect(wrapper.isValidDate(date, maxDate, minDate, false)).toEqual(true);
  });

  it("DatePicker test onClick function", () => {
    const wrapper = mount(<DatePicker open />);
    const svg = wrapper.find(".calendar-icon");

    svg.simulate("click");
    expect(wrapper.state("open")).toBe(false);
    svg.simulate("click");
    expect(wrapper.state("open")).toBe(true);

    const wrapper2 = mount(<DatePicker open={false} disabled />);
    const svg2 = wrapper.find(".calendar-icon");
    svg2.simulate("click");
    expect(wrapper2.state("open")).toBe(false);
    svg2.simulate("click");
    expect(wrapper2.state("open")).toBe(false);
  });

  it("DatePicker test onClick function", () => {
    const wrapper = shallow(<DatePicker open locale="en" />).instance();
    const mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
    expect(wrapper.getMask()).toEqual(mask);

    const wrapper2 = shallow(<DatePicker open locale="nl" />).instance();
    const mask2 = [/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    expect(wrapper2.getMask()).toEqual(mask2);

    const wrapper3 = shallow(<DatePicker open locale="ru" />).instance();
    const mask3 = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
    expect(wrapper3.getMask()).toEqual(mask3);

    const wrapper4 = shallow(<DatePicker open locale="zh-cn" />).instance();
    const mask4 = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
    expect(wrapper4.getMask()).toEqual(mask4.reverse());

    const wrapper5 = shallow(<DatePicker open locale="ko" />).instance();
    const mask5 = [
      ".",
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ];
    expect(wrapper5.getMask()).toEqual(mask5.reverse());
  });

  /*it("DatePicker check the onChange callback", () => {
    const onChange = jest.fn();
    const props = { value: "03/03/2000", onChange };
    const wrapper = mount(<DatePicker {...props} />).find("input");
    wrapper.simulate("change", { target: { value: "09/09/2019" } });
    expect(onChange).toHaveBeenCalledWith(new Date("09/09/2019"));
  });*/

  it("DatePicker check the Calendar onChange callback", () => {
    const onChange = jest.fn();
    const props = { value: "03/03/2000", open: true, onChange };
    const wrapper = mount(<DatePicker {...props} />);

    const days = wrapper.find(".calendar-month");

    days.first().simulate("click", { target: { value: 1 } });

    expect(onChange).toHaveBeenCalled();
  });

  it("DatePicker check Compare dates function", () => {
    const date = new Date();
    const wrapper = shallow(<DatePicker />).instance();
    expect(wrapper.compareDates(date, date) === 0).toEqual(true);
    expect(wrapper.compareDates(date, new Date("01/01/2000")) === 0).toEqual(
      false
    );
  });

  it("Render with error date", () => {
    const props = {
      minDate: new Date("01/01/2000"),
      maxDate: new Date("01/01/2020"),
      selectedDate: new Date("01/01/1999"),
      error: false
    };
    const wrapper = shallow(<DatePicker {...props} />).instance();
    expect(wrapper.state.error).toEqual(true);
    expect(wrapper.state.open).toEqual(false);
  });
});
