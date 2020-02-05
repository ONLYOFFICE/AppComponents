import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import DropDown from "../DropDown";
import Calendar from "../Calendar";
import moment from "moment";
import isEmpty from "lodash/isEmpty";
import { CalendarIcon } from "./svg";
import {
  StyledDateInput,
  StyledDropDown,
  StyledInput
} from "./StyledDatePicker";

import { Base, Dark } from "../../themes";

class DatePicker extends Component {
  constructor(props) {
    super(props);

    moment.locale(props.locale);
    this.ref = React.createRef();

    const { open, selectedDate, error, minDate, maxDate } = this.props;

    if (open) {
      this.handleAnyClick(true, this.handleClick);
    }

    let newState = {
      open,
      selectedDate: moment(selectedDate).toDate(),
      value: moment(selectedDate).format("L"),
      mask: this.getMask,
      error
    };

    if (this.isValidDate(selectedDate, maxDate, minDate, error)) {
      newState = Object.assign({}, newState, {
        error: true,
        open: false
      });
    }

    this.state = newState;
  }

  handleAnyClick = (subscribe, handler) => {
    if (subscribe) {
      document.addEventListener("click", handler);
    } else {
      document.removeEventListener("click", handler);
    }
  };

  handleClick = e => {
    this.state.open &&
      !this.ref.current.contains(e.target) &&
      this.onClick(false);
  };

  handleChange = e => {
    const { value } = this.state;

    const targetValue = e.target.value;
    if (value != targetValue) {
      let newState = { value: targetValue };
      const format = moment.localeData().longDateFormat("L");
      const momentDate = moment(targetValue, format);
      const date = momentDate.toDate();

      if (
        !isNaN(date) &&
        this.compareDate(date) &&
        targetValue.indexOf("_") === -1
      ) {
        //console.log("Mask complete");
        this.props.onChange && this.props.onChange(date);
        newState = Object.assign({}, newState, {
          selectedDate: date,
          error: false
        });
      } else if (targetValue.indexOf("_") !== -1 && targetValue.length !== 0) {
        newState = Object.assign({}, newState, {
          error: true
        });
      } else {
        newState = Object.assign({}, newState, {
          error: true,
          open: false
        });
      }
      this.setState(newState);
    }
  };

  onChange = value => {
    this.onClick(!this.state.open);
    const formatValue = moment(value).format("L");
    this.props.onChange && this.props.onChange(value);
    this.setState({ selectedDate: value, value: formatValue, error: false });
  };

  onClick = open => {
    if (!this.props.disabled) {
      this.setState({ open });
    }
  };

  compareDate = date => {
    const { minDate, maxDate } = this.props;
    if (date < minDate || date > maxDate) {
      return false;
    }
    return true;
  };

  getMask = () => {
    let symbol = ".";
    const localeMask = moment.localeData().longDateFormat("L");
    const { locale } = this.props;

    if (localeMask.indexOf("/") + 1) {
      symbol = "/";
    } else if (localeMask.indexOf(".") + 1) {
      symbol = ".";
    } else if (localeMask.indexOf("-") + 1) {
      symbol = "-";
    }

    const mask = [
      /\d/,
      /\d/,
      symbol,
      /\d/,
      /\d/,
      symbol,
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ];

    if (localeMask[0] === "Y") {
      mask.reverse();
    }
    if (locale === "ko" || locale === "lv") {
      mask.push(symbol);
    }
    return mask;
  };

  compareDates = (date1, date2) => {
    return moment(date1)
      .startOf("day")
      .diff(moment(date2).startOf("day"), "days");
  };

  isValidDate = (selectedDate, maxDate, minDate, error) => {
    if (
      (this.compareDates(selectedDate, maxDate) > 0 ||
        this.compareDates(selectedDate, minDate) < 0) &&
      !error
    ) {
      return true;
    }
    return false;
  };

  componentWillUnmount() {
    this.handleAnyClick(false, this.handleClick);
  }

  componentDidUpdate(prevProps, prevState) {
    const { locale, open, selectedDate, maxDate, minDate } = this.props;
    const { error, value } = this.state;
    let newState = {};

    if (locale !== prevProps.locale) {
      moment.locale(locale);
      newState = {
        mask: this.getMask(),
        value: moment(selectedDate).format("L")
      };
    }

    if (selectedDate !== prevProps.selectedDate) {
      newState = Object.assign({}, newState, {
        selectedDate,
        value: moment(selectedDate).format("L")
      });
    }

    if (this.state.open !== prevState.open) {
      this.handleAnyClick(this.state.open, this.handleClick);
    }

    if (open !== prevProps.open) {
      newState = Object.assign({}, newState, {
        open
      });
    }

    if (this.props.error !== prevProps.error) {
      newState = Object.assign({}, newState, {
        error: this.props.error,
        open: false
      });
    }

    const date = new Date(value);
    if (
      this.compareDates(selectedDate, maxDate) <= 0 &&
      this.compareDates(selectedDate, minDate) >= 0 &&
      error &&
      this.compareDates(date, maxDate) <= 0 &&
      this.compareDates(date, minDate) >= 0 &&
      !this.props.error
    ) {
      newState = Object.assign({}, newState, {
        error: false,
        selectedDate,
        value: moment(selectedDate).format("L")
      });
    }

    if (
      this.isValidDate(selectedDate, maxDate, minDate, error) &&
      this.isValidDate(this.state.selectedDate, maxDate, minDate, error)
    ) {
      newState = Object.assign({}, newState, {
        error: true,
        open: false
      });
    }

    if (!isEmpty(newState)) {
      this.setState(newState);
    }
  }

  render() {
    const {
      disabled,
      readOnly,
      minDate,
      maxDate,
      locale,
      onChange,
      ...rest
    } = this.props;
    const { value, open, mask, error, selectedDate } = this.state;

    return (
      <StyledDateInput {...rest} ref={this.ref}>
        <StyledInput disabled={disabled} error={error}>
          <TextInput
            className="text-input-style"
            scale
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={this.handleChange}
            mask={mask}
            keepCharPositions
            border={false}
          />

          <div className="date-picker_icon">
            <div className="icon-block">
              <CalendarIcon
                className="calendar-icon"
                onClick={this.onClick.bind(this, !open)}
              />
            </div>
          </div>
        </StyledInput>

        {open && (
          <StyledDropDown>
            <DropDown className="drop-down" open={open}>
              <Calendar
                locale={locale}
                minDate={minDate}
                maxDate={maxDate}
                disabled={disabled}
                openToDate={selectedDate}
                selectedDate={selectedDate}
                onChange={this.onChange}
                size="base"
                //theme={{ calendar: Base.calendar }}
                theme={Base}
              />
            </DropDown>
          </StyledDropDown>
        )}
      </StyledDateInput>
    );
  }
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  openToDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  open: PropTypes.bool
};

DatePicker.defaultProps = {
  minDate: new Date("1970/01/01"),
  maxDate: new Date(new Date().getFullYear() + 1, 1, 1),
  selectedDate: moment(new Date()).toDate()
};

export default DatePicker;
