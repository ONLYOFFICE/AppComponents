import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import { StyledDay, StyledDayContent } from "./StyledCalendar";
import Text from "../Text";

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
    const { day, size, onDayClick, ...rest } = this.props;
    const newTheme = this.props.theme
      ? { theme: { ...this.props.theme } }
      : { ...rest };

    return (
      <StyledDay size={size} className={`calendar_day ${day.disableClass}`}>
        <StyledDayContent {...newTheme} onClick={onDayClick.bind(this, day)}>
          <Text bold className={day.className}>
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
  onDayClick: PropTypes.func,
  theme: PropTypes.object
};

export default Day;
