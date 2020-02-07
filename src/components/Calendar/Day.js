import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import isEqual from "lodash/isEqual";
import { StyledDay, StyledDayContent } from "./StyledCalendar";

class Day extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { day, size, onDayClick } = this.props;
    if (
      isEqual(day, nextProps.day) &&
      size === nextProps.size &&
      onDayClick === nextProps.onDayClick
    ) {
      return false;
    }
    return true;
  }

  render() {
    //console.log("Day render");
    const { day, size, onDayClick } = this.props;

    return (
      <StyledDay size={size} className={`calendar_day ${day.disableClass}`}>
        <StyledDayContent
          onClick={onDayClick.bind(this, day)}
          className={day.className}
        >
          <Text bold color="inherit;" className="textStyle">
            {day.value}
          </Text>
        </StyledDayContent>
      </StyledDay>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object,
  size: PropTypes.string,
  onDayClick: PropTypes.func
};

export default Day;
