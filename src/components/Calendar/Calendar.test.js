import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Weekdays from "./Weekdays";
import Days from "./Days";
import Day from "./Day";
import Calendar from "./";
import { Base } from "../../themes";
import {
  StyledComboBoxMonth,
  StyledCalendar,
  StyledMonth,
  StyledWeekdays,
  StyledDay,
  StyledDays
} from "./StyledCalendar";

const baseWeekdaysProps = {
  optionsWeekdays: [
    { key: "en_0", value: "Mo", color: "" },
    { key: "en_1", value: "Tu", color: "" },
    { key: "en_2", value: "We", color: "" },
    { key: "en_3", value: "Th", color: "" },
    { key: "en_4", value: "Fr", color: "" },
    { key: "en_5", value: "Sa", color: "#A3A9AE" },
    { key: "en_6", value: "Su", color: "#A3A9AE" }
  ],
  size: "base"
};

const baseDaysProps = {
  optionsDays: [
    {
      className: "calendar-month_neighboringMonth",
      dayState: "prev",
      disableClass: null,
      value: 25
    },
    {
      className: "calendar-month_neighboringMonth",
      dayState: "prev",
      disableClass: null,
      value: 26
    }
  ],
  onDayClick: jest.fn,
  size: "base"
};

const baseDayProps = {
  day: {
    className: "calendar-month_neighboringMonth",
    dayState: "prev",
    disableClass: null,
    value: 26
  },
  onDayClick: jest.fn(),
  size: "base"
};

const selectedDate = new Date("09/12/2019");
const openToDate = new Date("09/12/2019");
const minDate = new Date("01/01/1970");
const maxDate = new Date(new Date().getFullYear() + 1 + "/01/01");

describe("Weekdays tests:", () => {
  it("Weekdays renders without error", () => {
    const wrapper = mount(<Weekdays {...baseWeekdaysProps} />);
    expect(wrapper).toExist();
  });

  it("Weekdays not re-render test", () => {
    const wrapper = shallow(<Weekdays {...baseWeekdaysProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);
    expect(shouldUpdate).toBe(false);
  });

  it("Weekdays render test", () => {
    const wrapper = shallow(<Weekdays {...baseWeekdaysProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      size: "big"
    });
    expect(shouldUpdate).toBe(true);
  });

  it("Weekdays property size passed", () => {
    const wrapper = mount(<Weekdays {...baseWeekdaysProps} size={"big"} />);
    expect(wrapper.prop("size")).toEqual("big");
  });
});
describe("Days tests:", () => {
  it("Days renders without error", () => {
    const wrapper = mount(<Days {...baseDaysProps} />);
    expect(wrapper).toExist();
  });

  it("Days not re-render test", () => {
    const wrapper = shallow(<Days {...baseDaysProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);
    expect(shouldUpdate).toBe(false);
  });

  it("Days render test", () => {
    const wrapper = shallow(<Days {...baseDaysProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      size: "big"
    });
    expect(shouldUpdate).toBe(true);
  });

  it("Days property size passed", () => {
    const wrapper = mount(<Days {...baseDaysProps} size={"big"} />);
    expect(wrapper.prop("size")).toEqual("big");
  });
});

describe("Day tests:", () => {
  it("Day renders without error", () => {
    const wrapper = mount(<Day {...baseDayProps} />);
    expect(wrapper).toExist();
  });

  it("Day not re-render test", () => {
    const wrapper = shallow(<Day {...baseDayProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);
    expect(shouldUpdate).toBe(false);
  });

  it("Day render test", () => {
    const wrapper = shallow(<Day {...baseDayProps} />).instance();
    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      size: "big"
    });
    expect(shouldUpdate).toBe(true);
  });

  it("Day property size passed", () => {
    const wrapper = mount(<Day {...baseDayProps} size={"big"} />);
    expect(wrapper.prop("size")).toEqual("big");
  });
});

describe("Calendar tests:", () => {
  test("test size styles", () => {
    const tree = renderer.create(<Calendar size="base" />).toJSON();
    expect(tree).toHaveStyleRule("max-width", Base.calendar.containerBaseWidth);

    const tree2 = renderer.create(<Calendar size="big" />).toJSON();
    expect(tree2).toHaveStyleRule("max-width", Base.calendar.containerBigWidth);

    const tree3 = renderer.create(<StyledComboBoxMonth size="base" />).toJSON();
    expect(tree3).toHaveStyleRule(
      "max-width",
      Base.calendar.comboBoxMonth.baseWidth
    );
    expect(tree3).toHaveStyleRule(
      "width",
      Base.calendar.comboBoxMonth.baseWidth
    );

    const tree4 = renderer.create(<StyledComboBoxMonth size="big" />).toJSON();
    expect(tree4).toHaveStyleRule(
      "max-width",
      Base.calendar.comboBoxMonth.bigWidth
    );
    expect(tree4).toHaveStyleRule(
      "width",
      Base.calendar.comboBoxMonth.bigWidth
    );

    const tree5 = renderer.create(<StyledCalendar size="base" />).toJSON();
    expect(tree5).toHaveStyleRule("width", Base.calendar.baseWidth);

    const tree6 = renderer.create(<StyledCalendar size="big" />).toJSON();
    expect(tree6).toHaveStyleRule("width", Base.calendar.bigWidth);

    const tree7 = renderer.create(<StyledMonth size="base" />).toJSON();
    expect(tree7).toHaveStyleRule("width", Base.calendar.month.baseWidth);

    const tree8 = renderer.create(<StyledMonth size="big" />).toJSON();
    expect(tree8).toHaveStyleRule("width", Base.calendar.month.bigWidth);

    const tree9 = renderer.create(<StyledWeekdays size="base" />).toJSON();
    expect(tree9).toHaveStyleRule("width", Base.calendar.weekdays.baseWidth);

    const tree10 = renderer.create(<StyledWeekdays size="big" />).toJSON();
    expect(tree10).toHaveStyleRule("width", Base.calendar.weekdays.bigWidth);

    const tree11 = renderer.create(<StyledDay size="base" />).toJSON();
    expect(tree11).toHaveStyleRule(
      "margin-top",
      Base.calendar.day.baseMarginTop
    );

    const tree12 = renderer.create(<StyledDay size="big" />).toJSON();
    expect(tree12).toHaveStyleRule(
      "margin-top",
      Base.calendar.day.bigMarginTop
    );

    const tree13 = renderer.create(<StyledDays size="base" />).toJSON();
    expect(tree13).toHaveStyleRule("width", Base.calendar.day.baseSizeWidth);

    const tree14 = renderer.create(<StyledDays size="big" />).toJSON();
    expect(tree14).toHaveStyleRule("width", Base.calendar.day.bigSizeWidth);
  });

  it("id, className, style is exists", () => {
    const wrapper = mount(
      <Calendar id="testId" className="test" style={{ color: "red" }} />
    );

    expect(wrapper.prop("id")).toEqual("testId");
    expect(wrapper.prop("className")).toEqual("test");
    expect(wrapper.getDOMNode().style).toHaveProperty("color", "red");
  });

  it("Calendar renders without error", () => {
    const wrapper = mount(<Calendar />);
    expect(wrapper).toExist();
  });

  it("Calendar selectedDate test", () => {
    const wrapper = mount(<Calendar selectedDate={selectedDate} />);
    expect(wrapper.props().selectedDate).toEqual(selectedDate);
  });

  it("Calendar newOpenToDate test", () => {
    const wrapper = mount(
      <Calendar
        minDate={minDate}
        maxDate={maxDate}
        openToDate={new Date("3000/01/01")}
      />
    );
    expect(wrapper.state().openToDate).toEqual(minDate);
  });

  it("Calendar size test", () => {
    const wrapper = shallow(<Calendar size="big" />);
    expect(wrapper.prop("size")).toEqual("big");
  });

  it("Calendar componentDidUpdate() test", () => {
    const wrapper = mount(<Calendar />).instance();

    wrapper.componentDidUpdate({ selectedDate: new Date("01/01/2000") });
    expect(wrapper.props.selectedDate).toBe(wrapper.props.selectedDate);
    expect(wrapper.state.selectedDate).toBe(wrapper.props.selectedDate);

    wrapper.componentDidUpdate({ openToDate: new Date("01/01/2000") });
    expect(wrapper.props.openToDate).toBe(wrapper.props.openToDate);
    expect(wrapper.state.openToDate).toBe(wrapper.props.openToDate);

    wrapper.componentDidUpdate({ minDate: new Date("01/01/1970") });
    expect(wrapper.props.minDate).toBe(wrapper.props.minDate);
    expect(wrapper.state.minDate).toBe(wrapper.props.minDate);

    wrapper.componentDidUpdate({ maxDate: new Date("01/01/3000") });
    expect(wrapper.props.maxDate).toBe(wrapper.props.maxDate);
    expect(wrapper.state.maxDate).toBe(wrapper.props.maxDate);
  });

  it("test getCurrentMonth function", () => {
    const optionsMonth = [
      { key: "0", label: "January", disabled: true },
      { key: "1", label: "February", disabled: true },
      { key: "2", label: "March", disabled: true },
      { key: "3", label: "April", disabled: true },
      { key: "4", label: "May", disabled: true },
      { key: "5", label: "June", disabled: true },
      { key: "6", label: "July", disabled: false },
      { key: "7", label: "August", disabled: false },
      { key: "8", label: "September", disabled: false },
      { key: "9", label: "October", disabled: false },
      { key: "10", label: "November", disabled: false },
      { key: "11", label: "December", disabled: false }
    ];
    const newOpenToDate = new Date();
    const wrapper = shallow(<Calendar />).instance();

    expect(wrapper.getCurrentMonth(optionsMonth, newOpenToDate)).toEqual(
      optionsMonth[6]
    );
  });

  it("test getCurrentYear function", () => {
    const optionsYear = [
      { key: 2021, label: "2021" },
      { key: 2020, label: "2020" },
      { key: 2019, label: "2019" },
      { key: 2018, label: "2018" },
      { key: 2017, label: "2017" }
    ];
    const newOpenToDate = new Date("01/01/2015");
    const wrapper = shallow(
      <Calendar minDate={new Date("01/01/2017")} />
    ).instance();

    expect(wrapper.getCurrentYear(optionsYear, newOpenToDate)).toEqual(
      optionsYear[4]
    );
  });

  it("test firstDayOfMonth function", () => {
    const openToDate = new Date("03/01/2020");
    const wrapper = shallow(<Calendar />).instance();

    expect(wrapper.firstDayOfMonth(openToDate)).toEqual(6);
  });

  it("test onSelectYear function", () => {
    const wrapper = shallow(<Calendar />).instance();

    wrapper.onSelectYear({ key: 2019, value: 2019 });
    expect(wrapper.state.openToDate).toEqual(new Date("01/01/2019"));

    const props = {
      openToDate: new Date("05/01/2000"),
      selectedDate: new Date("01/01/2000"),
      minDate: new Date("01/01/1970"),
      maxDate: new Date("01/01/2020")
    };

    const wrapper2 = shallow(<Calendar {...props} />).instance();
    wrapper2.onSelectYear({ key: 2020, value: 2020 });
    expect(wrapper2.state.openToDate).toEqual(new Date("01/01/2020"));
  });

  it("Calendar check onSelectMonth function", () => {
    const props = {
      openToDate: new Date("01/01/2000"),
      selectedDate: new Date("01/01/2000")
    };
    const wrapper = shallow(<Calendar {...props} />).instance();
    wrapper.onSelectMonth({ key: "1", label: "February", disabled: false });

    expect(wrapper.state.openToDate).toEqual(new Date("02/01/2000"));
  });

  it("test getListMonth  function", () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const openToDate = new Date("05/01/2000");
    const minDate = new Date("05/01/2000");
    const maxDate = new Date("01/01/2020");

    const result = [
      { key: "0", label: "January", disabled: true },
      { key: "1", label: "February", disabled: true },
      { key: "2", label: "March", disabled: true },
      { key: "3", label: "April", disabled: true },
      { key: "4", label: "May", disabled: false },
      { key: "5", label: "June", disabled: false },
      { key: "6", label: "July", disabled: false },
      { key: "7", label: "August", disabled: false },
      { key: "8", label: "September", disabled: false },
      { key: "9", label: "October", disabled: false },
      { key: "10", label: "November", disabled: false },
      { key: "11", label: "December", disabled: false }
    ];

    const wrapper = shallow(<Calendar />).instance();
    expect(wrapper.getListMonth(minDate, maxDate, openToDate, months)).toEqual(
      result
    );
  });

  it("test onDayClick function", () => {
    const onChange = jest.fn();

    const props = {
      selectedDate: new Date("01/01/2020"),
      onChange
    };
    const wrapper = shallow(<Calendar {...props} />).instance();
    wrapper.onDayClick({
      value: 31,
      disableClass: "",
      className: "",
      dayState: "prev"
    });
    expect(wrapper.state.selectedDate).toEqual(new Date("12/31/2019"));
    expect(wrapper.state.openToDate).toEqual(new Date("12/31/2019"));
    expect(onChange).toBeCalledWith(new Date("12/31/2019"));

    const wrapper2 = shallow(<Calendar {...props} />).instance();
    wrapper2.onDayClick({
      value: 1,
      disableClass: "",
      className: "",
      dayState: "next"
    });
    expect(wrapper2.state.selectedDate).toEqual(new Date("02/01/2020"));
    expect(wrapper2.state.openToDate).toEqual(new Date("02/01/2020"));
    expect(onChange).toBeCalledWith(new Date("02/01/2020"));

    const wrapper3 = shallow(<Calendar {...props} />).instance();
    wrapper3.onDayClick({
      value: 9,
      disableClass: "",
      className: "",
      dayState: "now"
    });
    expect(wrapper3.state.selectedDate).toEqual(new Date("01/09/2020"));
    expect(onChange).toBeCalledWith(new Date("01/09/2020"));
  });

  it("Calendar check Compare dates function", () => {
    const date = new Date();
    const wrapper = shallow(<Calendar />).instance();
    expect(wrapper.compareDates(date, date) === 0).toEqual(true);
    expect(wrapper.compareDates(date, new Date("01/01/2000")) === 0).toEqual(
      false
    );
  });

  it("test getDays function", () => {
    let selectedDate = new Date("09/12/2019");
    let openToDate = new Date("09/12/2019");
    let minDate = new Date("09/12/2019");
    let maxDate = new Date(new Date().getFullYear() + 1 + "/01/01");
    const wrapper = shallow(<Calendar />).instance();
    let result = wrapper.getDays(minDate, maxDate, openToDate, selectedDate);

    //TODO: Need fix this
    let i = 0;
    while (i !== 17) {
      expect(result[i].disableClass).toEqual("calendar-month_disabled");
      i++;
    }

    selectedDate = new Date("01/01/2019");
    openToDate = new Date("02/01/2020");
    minDate = new Date("01/01/2020");
    maxDate = new Date(new Date().getFullYear() + 1 + "/01/01");
    const wrapper2 = shallow(<Calendar />).instance();
    result = wrapper2.getDays(minDate, maxDate, openToDate, selectedDate);

    //TODO: Need fix this
    i = 0;
    while (i !== 29) {
      expect(result[i].disableClass).toEqual(null);
      i++;
    }

    selectedDate = new Date("01/01/2019");
    minDate = new Date("01/01/2020");
    openToDate = new Date("12/01/2019");
    maxDate = new Date("01/01/2020");
    const wrapper3 = shallow(<Calendar />).instance();
    result = wrapper3.getDays(minDate, maxDate, openToDate, selectedDate);

    //TODO: Need fix this
    i = 0;
    while (i !== 31) {
      expect(result[i].disableClass).toEqual(null);
      i++;
    }

    selectedDate = new Date("01/01/2019");
    minDate = new Date("12/01/2019");
    openToDate = new Date("01/01/2020");
    maxDate = new Date("01/01/2020");
    const wrapper4 = shallow(<Calendar />).instance();
    result = wrapper4.getDays(minDate, maxDate, openToDate, selectedDate);

    //TODO: Need fix this

    expect(result[2].disableClass).toEqual(null);
  });
});
