import styled, { css } from "styled-components";
import Box from "../Box";
import { NoUserSelect } from "../../utils/commonStyles";

const StyledComboBox = styled(Box)`
  position: relative;
  outline: 0;
  width: ${props =>
    (props.scaled && "100%") ||
    (props.size === "base" && props.theme.comboBox.width.base) ||
    (props.size === "middle" && props.theme.comboBox.width.middle) ||
    (props.size === "big" && props.theme.comboBox.width.big) ||
    (props.size === "huge" && props.theme.comboBox.width.huge) ||
    (props.size === "content" && "fit-content")};
`;

const StyledArrowIcon = styled(Box)`
  display: flex;
  align-self: start;

  width: ${props =>
    props.needDisplay ? props.theme.comboBox.arrow.width : "0px"};
  flex: ${props =>
    props.needDisplay ? props.theme.comboBox.arrow.flex : "0 0 0px"};

  margin-top: ${props =>
    props.withoutBorder
      ? props.theme.comboBox.arrow.marginTopWithBorder
      : props.theme.comboBox.arrow.marginTop};
  margin-right: ${props =>
    props.needDisplay ? props.theme.comboBox.arrow.marginRight : "0px"};
  margin-left: ${props =>
    props.needDisplay ? props.theme.comboBox.arrow.marginLeft : "0px"};

  ${props =>
    props.open &&
    css`
      transform: scale(1, -1);
    `}

  .expander-down-icon {
    height: 100%;
    width: 100%;

    g {
      path {
        fill: ${props => props.theme.comboBox.arrow.fillColor};
      }
    }
  }
`;

const StyledComboButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props =>
    props.withoutBorder
      ? props.theme.comboBox.button.height
      : props.theme.comboBox.button.heightWithBorder};

width: ${props =>
  (props.scaled && "100%") ||
  (props.size === "base" && props.theme.comboBox.width.base) ||
  (props.size === "middle" && props.theme.comboBox.width.middle) ||
  (props.size === "big" && props.theme.comboBox.width.big) ||
  (props.size === "huge" && props.theme.comboBox.width.huge) ||
  (props.size === "content" && "fit-content")};

  ${NoUserSelect};

  padding-left: ${props => props.theme.comboBox.button.paddingLeft};
  
  color: ${props =>
    props.disabled
      ? props.theme.comboBox.button.disabledColor
      : props.theme.comboBox.button.color};
  background: ${props =>
    !props.withoutBorder
      ? props.theme.comboBox.button.backgroundWithBorder
      : props.theme.comboBox.button.background};

  ${props =>
    !props.withoutBorder &&
    `
      border: ${props.theme.comboBox.button.border}
      border-radius: ${props.theme.comboBox.button.borderRadius}
    `}

  border-color: ${props =>
    props.open && props.theme.comboBox.button.borderColor};
  
  ${props =>
    props.disabled &&
    !props.withoutBorder &&
    css`
      border-color: ${props => props.theme.comboBox.button.disabledBorderColor};
      background: ${props => props.theme.comboBox.button.disabledBackground};
    `}

  :hover{
    border-color: ${props =>
      props.open
        ? props.theme.comboBox.button.hoverBorderColorOpen
        : props.theme.comboBox.button.hoverBorderColor};

    cursor: ${props =>
      props.disabled || (!props.containOptions && !props.withAdvancedOptions)
        ? "default"
        : "pointer"};

    ${props =>
      props.disabled &&
      `
      border-color: ${props.theme.comboBox.button.hoverDisabledBorderColor}
    `}
  }
  .combo-button-label{
    margin-right: ${props =>
      props.withoutBorder
        ? props.theme.comboBox.label.marginRight
        : props.theme.comboBox.label.marginRightWithBorder};


    color: ${props =>
      props.defaultOption
        ? props.disabled
          ? props.theme.comboBox.label.defaultDisabledColor
          : props.theme.comboBox.label.defaultColor
        : props.disabled
        ? props.theme.comboBox.label.disabledColor
        : props.theme.comboBox.label.color};

    max-width: ${props => props.theme.comboBox.label.maxWidth};
    ${props =>
      props.withoutBorder &&
      css`
        line-height: ${props.theme.comboBox.label.lineHeightWithoutBorder};
        text-decoration: ${props.theme.comboBox.label.lineHeightTextDecoration};
      `}
    
    ${props =>
      props.open &&
      props.withoutBorder &&
      `
      text-decoration: underline dashed;
    `};
  }
  .combo-button-label:hover{
    ${props =>
      props.withoutBorder &&
      !props.disabled &&
      css`
        text-decoration: underline dashed;
      `}
  }
`;

const StyledOptionalItem = styled(Box)`
  margin-right: ${props => props.theme.comboBox.childrenButton.marginRight};

  path {
    fill: ${props =>
      props.defaultOption
        ? props.disabled
          ? props.theme.comboBox.childrenButton.defaultDisabledColor
          : props.theme.comboBox.childrenButton.defaultColor
        : props.disabled
        ? props.theme.comboBox.childrenButton.disabledColor
        : props.theme.comboBox.childrenButton.color};
  }
`;

const StyledIcon = styled(Box)`
  width: ${props => props.theme.comboBox.icon.width};
  margin-right: ${props => props.theme.comboBox.icon.marginRight};
  margin-top: ${props => props.theme.comboBox.icon.marginTop};
`;

export {
  StyledComboBox,
  StyledArrowIcon,
  StyledComboButton,
  StyledOptionalItem,
  StyledIcon
};
