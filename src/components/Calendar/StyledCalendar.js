import styled, { css } from "styled-components";
import { NoUserSelect } from "../../utils/commonStyles";
import Box from "../Box";
import { Base } from "../../themes";

const HoverStyle = css`
  &:hover {
    background-color: ${props => props.theme.calendar.hover.backgroundColor};
    border-radius: ${props => props.theme.calendar.hover.borderRadius};
    cursor: ${props => props.theme.calendar.hover.cursor};
  }
`;

const StyledComboBox = styled(Box)`
  position: relative;
  display: flex;
  padding: ${props => props.theme.calendar.comboBox.padding};
`;

const StyledComboBoxMonth = styled(Box)`
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.comboBoxMonth.baseWidth
      : props.theme.calendar.comboBoxMonth.bigWidth};
  max-width: ${props =>
    props.size === "base"
      ? props.theme.calendar.comboBoxMonth.baseWidth
      : props.theme.calendar.comboBoxMonth.bigWidth};
`;

const StyledComboBoxDate = styled(Box)`
  min-width: ${props => props.theme.calendar.comboBox.minWidth};
  height: ${props => props.theme.calendar.comboBox.height};
  margin-left: ${props => props.theme.calendar.comboBox.marginLeft};
`;

const StyledCalendarContainer = styled(Box)`
  max-width: ${props =>
    props.size === "base"
      ? props.theme.calendar.containerBaseWidth
      : props.theme.calendar.containerBigWidth};
`;

const StyledCalendar = styled(Box)`    
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.baseWidth
      : props.theme.calendar.bigWidth};

  .calendar-month {
    ${HoverStyle}
  }

  .calendar-month_neighboringMonth {
    color: ${props => props.theme.calendar.month.neighboringColor};
    ${HoverStyle};

    &:hover {
      color: ${props => props.theme.calendar.month.neighboringHoverColor};
    }
  }

  .calendar-month_disabled {
    pointer-events: none;
    color: ${props => props.theme.calendar.month.disabledColor};
    ${HoverStyle}
  }

  .calendar-month_weekend {
    color: ${props => props.theme.calendar.month.weekendColor};
    ${HoverStyle}
  }

  .calendar-month_selected-day {
    background-color: ${props =>
      props.theme.calendar.selectedDay.backgroundColor};
    border-radius: ${props => props.theme.calendar.selectedDay.borderRadius};
    cursor: ${props => props.theme.calendar.selectedDay.cursor};
    color: ${props => props.theme.calendar.selectedDay.color};
  }
`;

const StyledMonth = styled(Box)`
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.month.baseWidth
      : props.theme.calendar.month.bigWidth};
`;

const StyledWeekday = styled(Box)`
  overflow: hidden;
  flex-basis: calc(1 / 7 * 100%);
  ${NoUserSelect}
`;

const StyledWeekdays = styled(Box)`
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.weekdays.baseWidth
      : props.theme.calendar.weekdays.bigWidth};
  display: flex;
  margin-bottom: ${props => props.theme.calendar.weekdays.marginBottom};

  .dayText {
    width: ${props => props.theme.calendar.day.width};
    height: ${props => props.theme.calendar.day.height};
    text-align: center;
  }
`;

const StyledDay = styled(Box)`
  display: flex;
  flex-basis: calc(1 / 7 * 100%);
  text-align: center;
  line-height: ${props => props.theme.calendar.day.lineHeight};
  user-select: none;
  margin-top: ${props =>
    props.size === "base"
      ? props.theme.calendar.day.baseMarginTop
      : props.theme.calendar.day.bigMarginTop};
`;

const StyledDayContent = styled(Box)`
  width: ${props => props.theme.calendar.day.width};
  height: ${props => props.theme.calendar.day.height};
  .textStyle {
    text-align: center;
  }
`;

const StyledDays = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.day.baseSizeWidth
      : props.theme.calendar.day.bigSizeWidth};
`;

StyledComboBox.defaultProps = { theme: Base };
StyledComboBoxMonth.defaultProps = { theme: Base };
StyledComboBoxDate.defaultProps = { theme: Base };
StyledCalendarContainer.defaultProps = { theme: Base };
StyledCalendar.defaultProps = { theme: Base };
StyledMonth.defaultProps = { theme: Base };
StyledWeekdays.defaultProps = { theme: Base };
StyledDay.defaultProps = { theme: Base };
StyledDayContent.defaultProps = { theme: Base };
StyledDays.defaultProps = { theme: Base };

export {
  StyledComboBox,
  StyledComboBoxMonth,
  StyledComboBoxDate,
  StyledCalendarContainer,
  StyledCalendar,
  StyledMonth,
  StyledWeekday,
  StyledWeekdays,
  StyledDay,
  StyledDayContent,
  StyledDays
};
