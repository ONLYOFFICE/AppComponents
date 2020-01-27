import createStyledIcon from "./createStyledIcon";
import OrigCalendarIcon from "./calendar.react.svg";
import OrigExpanderRightIcon from "./expander-right.react.svg";
import OrigVerticalDotsIcon from "./vertical-dots.react.svg";
import OrigSearchIcon from "./search.react.svg";
import OrigSettingsIcon from "./settings.react.svg";
import OrigArrowContentIcon from "./arrow.content.react.svg";
import OrigRefreshIcon from "./refresh.react.svg";
import OrigPlusIcon from "./actions.header.touch.react.svg";
import OrigCheckIcon from "./check.react.svg";
import OrigQuestionIcon from "./question.react.svg";

export const ArrowContentIcon = createStyledIcon(
  OrigArrowContentIcon,
  "ArrowContentIcon"
);
export const CalendarIcon = createStyledIcon(OrigCalendarIcon, "CalendarIcon");
export const CheckIcon = createStyledIcon(OrigCheckIcon, "CheckIcon");
export const ExpanderRightIcon = createStyledIcon(
  OrigExpanderRightIcon,
  "ExpanderRightIcon"
);
export const PlusIcon = createStyledIcon(OrigPlusIcon, "PlusIcon");
export const RefreshIcon = createStyledIcon(OrigRefreshIcon, "RefreshIcon");
export const SearchIcon = createStyledIcon(OrigSearchIcon, "SearchIcon");
export const SettingsIcon = createStyledIcon(OrigSettingsIcon, "SettingsIcon");
export const VerticalDotsIcon = createStyledIcon(
  OrigVerticalDotsIcon,
  "VerticalDotsIcon"
);

export const QuestionIcon = createStyledIcon(
  OrigQuestionIcon,
  "ToggleButtonIcon",
  "rect"
);
