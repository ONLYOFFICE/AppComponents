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
    wrapper.componentDidUpdate(wrapper.props, wrapper.state);

    expect(wrapper.props).toBe(wrapper.props);
    expect(wrapper.state).toBe(wrapper.state);

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

    //Check invalid value
    const wrapper2 = mount(
      <DatePicker
        selectedDate={new Date("01/01/2030")}
        minDate={new Date("01/01/2019")}
        maxDate={new Date("01/01/2021")}
        error={false}
      />
    );

    const instance = wrapper2.instance();
    instance.componentDidUpdate(
      { selectedDate: new Date("01/01/2030") },
      wrapper.state
    );
    expect(instance.state.error).toBe(true);
    expect(instance.state.open).toBe(false);

    //Test error date function
    wrapper2.setProps({ selectedDate: new Date("01/01/2020") });
    expect(instance.state.error).toBe(false);

    const date = new Date();
    date.setFullYear(1);
    wrapper2.setProps({ selectedDate: date });

    instance.componentDidUpdate({ selectedDate: date }, wrapper.state);
    expect(instance.state.error).toBe(true);
  });

  it("DatePicker check Compare date function", () => {
    const date = new Date();
    const errorDate = new Date("01/01/3000");
    const wrapper = shallow(<DatePicker />).instance();
    expect(wrapper.compareDate(date)).toEqual(true);
    expect(wrapper.compareDate(errorDate)).toEqual(false);
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
    const wrapper = mount(<DatePicker open disabled={false} />);
    const svg = wrapper.find(".date-picker-icon");

    svg.simulate("click");
    expect(wrapper.state("open")).toBe(false);
    svg.simulate("click");
    expect(wrapper.state("open")).toBe(true);

    const wrapper2 = mount(<DatePicker open={false} disabled />);
    const svg2 = wrapper2.find(".date-picker-icon");
    svg2.simulate("click");
    expect(wrapper2.state("open")).toBe(false);
    svg2.simulate("click");
    expect(wrapper2.state("open")).toBe(false);
  });

  it("DatePicker test getMask function", () => {
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

  it("DatePicker check the onChange callback", () => {
    const onChange = jest.fn();
    const props = { value: "03/03/2000", onChange };
    const wrapper = mount(<DatePicker {...props} />).find("input");
    wrapper.simulate("change", { target: { value: "09/09/2019" } });
    expect(onChange).toHaveBeenCalled();

    const props2 = { value: "03/03/2000", onChange };
    const wrapper2 = mount(<DatePicker {...props2} />);
    const input = wrapper2.find("input");
    input.simulate("change", { target: { value: "09/09/201_" } });
    expect(onChange).toHaveBeenCalled();
    expect(wrapper2.state("error")).toBe(true);

    const props3 = { value: "03/03/2000", onChange };
    const wrapper3 = mount(<DatePicker {...props3} />);
    const input2 = wrapper3.find("input");
    input2.simulate("change", { target: { value: "Invalid date" } });
    expect(onChange).toHaveBeenCalled();
    expect(wrapper3.state("error")).toBe(true);
    expect(wrapper3.state("open")).toBe(false);

    const props4 = { value: "03/03/2000", onChange };
    const wrapper4 = mount(<DatePicker {...props4} />);
    const input3 = wrapper4.find("input");
    input3.simulate("change", { target: { value: "03/03/2000" } });
    expect(onChange).toHaveBeenCalled();
    input3.simulate("change", { target: { value: "03/03/2000" } });
    expect(onChange).toHaveBeenCalled();

    const momentDate = moment(
      "03/03/2000",
      moment.localeData().longDateFormat("L")
    );
    const date = momentDate.toDate();
    expect(wrapper4.state("selectedDate")).toStrictEqual(date);
  });

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
