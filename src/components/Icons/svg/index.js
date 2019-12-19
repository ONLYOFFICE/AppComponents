import createStyledIcon from "./createStyledIcon";
import OrigCalendarIcon from "./calendar.react.svg";
import OrigExpanderDownIcon from "./expander-down.react.svg";
import OrigExpanderRightIcon from "./expander-right.react.svg";
import OrigVerticalDotsIcon from "./vertical-dots.react.svg";
import OrigSearchIcon from "./search.react.svg";
import OrigSettingsIcon from "./settings.react.svg";
import OrigArrowContentIcon from "./arrow.content.react.svg";
import OrigRefreshIcon from "./refresh.react.svg";
import OrigRadiobuttonIcon from "./radiobutton.react.svg";
import OrigRadiobuttonCheckedIcon from "./radiobutton.checked.react.svg";
import OrigPlusIcon from "./actions.header.touch.react.svg";
import OrigCheckboxIcon from "./checkbox.react.svg";
import OrigCheckboxCheckedIcon from "./checkbox.checked.react.svg";
import OrigCheckboxIndeterminateIcon from "./checkbox.indeterminate.react.svg";
import OrigCheckIcon from "./check.react.svg";
import OrigToggleButtonCheckedIcon from "./toggle.button.checked.react.svg";
import OrigToggleButtonIcon from "./toggle.button.react.svg";
import OrigQuestionIcon from "./question.react.svg";

export const ArrowContentIcon = createStyledIcon(
  OrigArrowContentIcon,
  "ArrowContentIcon"
);
export const CalendarIcon = createStyledIcon(OrigCalendarIcon, "CalendarIcon");
export const CheckIcon = createStyledIcon(OrigCheckIcon, "CheckIcon");
export const CheckboxIcon = createStyledIcon(
  OrigCheckboxIcon,
  "CheckboxIcon",
  "rect"
);
export const CheckboxCheckedIcon = createStyledIcon(
  OrigCheckboxCheckedIcon,
  "CheckboxCheckedIcon",
  "rect",
  "rect"
);
export const CheckboxIndeterminateIcon = createStyledIcon(
  OrigCheckboxIndeterminateIcon,
  "CheckboxIndeterminateIcon",
  "rect:first-child",
  "rect:first-child"
);
export const ExpanderDownIcon = createStyledIcon(
  OrigExpanderDownIcon,
  "ExpanderDownIcon"
);
export const ExpanderRightIcon = createStyledIcon(
  OrigExpanderRightIcon,
  "ExpanderRightIcon"
);
export const PlusIcon = createStyledIcon(OrigPlusIcon, "PlusIcon");
export const RadiobuttonCheckedIcon = createStyledIcon(
  OrigRadiobuttonCheckedIcon,
  "RadiobuttonCheckedIcon"
);
export const RadiobuttonIcon = createStyledIcon(
  OrigRadiobuttonIcon,
  "RadiobuttonIcon"
);
export const RefreshIcon = createStyledIcon(OrigRefreshIcon, "RefreshIcon");
export const SearchIcon = createStyledIcon(OrigSearchIcon, "SearchIcon");
export const SettingsIcon = createStyledIcon(OrigSettingsIcon, "SettingsIcon");
export const VerticalDotsIcon = createStyledIcon(
  OrigVerticalDotsIcon,
  "VerticalDotsIcon"
);

export const ToggleButtonCheckedIcon = createStyledIcon(
  OrigToggleButtonCheckedIcon,
  "ToggleButtonCheckedIcon",
  "rect"
);

export const ToggleButtonIcon = createStyledIcon(
  OrigToggleButtonIcon,
  "ToggleButtonIcon",
  "rect"
);

export const QuestionIcon = createStyledIcon(
  OrigQuestionIcon,
  "ToggleButtonIcon",
  "rect"
);
