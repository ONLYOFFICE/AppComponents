import React from "react";
import { StyledWeekday, StyledWeekdays } from "./StyledCalendar";
import Text from "../Text";
import PropTypes from "prop-types";
import { isArrayEqual } from "../../utils/array";

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
    const { optionsWeekdays, size } = this.props;

    return (
      <StyledWeekdays size={size}>
        {optionsWeekdays.map((weekday, index) => {
          return (
            <StyledWeekday key={index}>
              <Text color={weekday.color} bold className={"dayText"}>
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
