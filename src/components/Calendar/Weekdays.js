import React from "react";
import { StyledWeekday, StyledWeekdays } from "./StyledCalendar";
import PropTypes from "prop-types";
import { isArrayEqual } from "../../utils/array";
import Text from "../Text";

class Weekdays extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { optionsWeekdays, size } = this.props;
    if (
      isArrayEqual(optionsWeekdays, nextProps.optionsWeekdays) &&
      size === nextProps.size
    ) {
      return false;
    }
    return true;
  }

  render() {
    //console.log("Weekdays render");
    const { optionsWeekdays, size, ...rest } = this.props;

    return (
      <StyledWeekdays size={size} {...rest}>
        {optionsWeekdays.map((weekday, index) => {
          return (
            <StyledWeekday key={index} disable={weekday.disabled} {...rest}>
              <Text className="calendar-weekday_text" bold>
                {weekday.value}
              </Text>
            </StyledWeekday>
          );
        })}
      </StyledWeekdays>
    );
  }
}

Weekdays.propTypes = {
  optionsWeekdays: PropTypes.array,
  size: PropTypes.string
};

export default Weekdays;
