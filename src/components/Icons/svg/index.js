import React from "react";
import Icon from "../../Icon";
// import createStyledIcon from "./createStyledIcon";
import OrigExpanderRightIcon from "./expander-right.react.svg";
import OrigVerticalDotsIcon from "./vertical-dots.react.svg";
import OrigSearchIcon from "./search.react.svg";
import OrigSettingsIcon from "./settings.react.svg";
import OrigRefreshIcon from "./refresh.react.svg";
import OrigPlusIcon from "./actions.header.touch.react.svg";
import OrigCheckIcon from "./check.react.svg";
import OrigQuestionIcon from "./question.react.svg";

export const CheckIcon = (props) => <Icon svgSource={OrigCheckIcon} {...props} />;

export const ExpanderRightIcon = (props) => <Icon svgSource={OrigExpanderRightIcon} {...props} />;

export const PlusIcon = (props) => <Icon svgSource={OrigPlusIcon} {...props} />;

export const RefreshIcon = (props) => <Icon svgSource={OrigRefreshIcon} {...props} />;

export const SearchIcon = (props) => <Icon svgSource={OrigSearchIcon} {...props} />;

export const SettingsIcon = (props) => <Icon svgSource={OrigSettingsIcon} {...props} />;

export const VerticalDotsIcon = (props) => <Icon svgSource={OrigVerticalDotsIcon} {...props} />;

export const QuestionIcon = (props) => <Icon svgSource={OrigQuestionIcon} fillPath="rect" {...props} />;
