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

const StyledCalendar = styled(Box)`
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.baseWidth
      : props.theme.calendar.bigWidth};

  .calendar-combo-box_container {
    .combo-button-label {
      color: ${props => props.theme.calendar.comboBox.color};
    }
    position: relative;
    display: flex;
    padding: ${props => props.theme.calendar.comboBox.padding};

    .calendar-combo-box-month_container {
      width: ${props =>
        props.size === "base"
          ? props.theme.calendar.comboBoxMonth.baseWidth
          : props.theme.calendar.comboBoxMonth.bigWidth};
    }

    .calendar-combo-box-year-container {
      max-width: 80px;
      margin-left: ${props => props.theme.calendar.comboBox.marginLeft};
    }
  }

  .calendar-month-container {
    width: ${props =>
      props.size === "base"
        ? props.theme.calendar.month.baseWidth
        : props.theme.calendar.month.bigWidth};
  }
`;

const StyledWeekday = styled(Box)`
  overflow: hidden;
  flex-basis: calc(1 / 7 * 100%);
  ${NoUserSelect}

  .calendar-weekday_text {
    color: ${props =>
      props.disable
        ? props.theme.calendar.weekdays.disabledColor
        : props.theme.calendar.weekdays.color};
    width: ${props => props.theme.calendar.day.width};
    height: ${props => props.theme.calendar.day.height};
    text-align: center;
  }
`;

const StyledWeekdays = styled(Box)`
  width: ${props =>
    props.size === "base"
      ? props.theme.calendar.weekdays.baseWidth
      : props.theme.calendar.weekdays.bigWidth};
  display: flex;
  margin-bottom: ${props => props.theme.calendar.weekdays.marginBottom};
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

  .calendar-day_content {
    .calendar-month {
      color: ${props => props.theme.calendar.month.color};
      ${HoverStyle};
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

    width: ${props => props.theme.calendar.day.width};
    height: ${props => props.theme.calendar.day.height};
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

StyledCalendar.defaultProps = { theme: Base };
StyledWeekday.defaultProps = { theme: Base };
StyledWeekdays.defaultProps = { theme: Base };
StyledDay.defaultProps = { theme: Base };
StyledDays.defaultProps = { theme: Base };

export { StyledCalendar, StyledWeekday, StyledWeekdays, StyledDay, StyledDays };
