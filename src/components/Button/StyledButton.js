import styled, { css } from "styled-components";

const primaryCss = css`
  border: 1px solid #2da7db;
  box-sizing: border-box;
`;

const activeCss = css`
  background-color: ${props => (props.primary ? "#1F97CA" : "#ECEEF1")};
  color: ${props => (props.primary ? "#ffffff" : "#333333")};
  ${props => !props.primary && { primaryCss }}
`;

const hoverCss = css`
  background-color: ${props => (props.primary ? "#3DB8EC" : "#FFFFFF")};
  color: ${props => (props.primary ? "#ffffff" : "#333333")};
  ${props => !props.primary && { primaryCss }}
`;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled || props.loaded ? "disabled" : "",
  tabIndex: props.tabIndex
}))`
  height: ${props =>
    (props.size === "big" && "36px") ||
    (props.size === "medium" && "32px") ||
    (props.size === "base" && "24px")};

  line-height: ${props =>
    (props.size === "big" && "19px") ||
    (props.size === "medium" && "18px") ||
    (props.size === "base" && "16px")};

  font-size: ${props =>
    (props.size === "big" && "14px") ||
    (props.size === "medium" && "13px") ||
    (props.size === "base" && "12px")};

  color: ${props =>
    (props.primary && "#FFFFFF") || (!props.disabled ? "#333333" : "#ECEEF1")};

  background-color: ${props =>
    !props.disabled || props.loaded
      ? props.primary
        ? "#2DA7DB"
        : "#FFFFFF"
      : props.primary
      ? "#A6DCF2"
      : "#FFFFFF"};

  ${props => props.scale && `width: 100%;`}

  padding: ${props =>
    (props.size === "big" &&
      (props.primary
        ? props.icon
          ? props.label
            ? "8px 24px 9px 24px"
            : "8px 10px 9px 10px"
          : props.label
          ? "8px 28px 9px 28px"
          : "8px 10px 9px 10px"
        : props.icon
        ? props.label
          ? "8px 24px 9px 24px"
          : "8px 10px 9px 10px"
        : props.label
        ? "8px 27px 9px 28px"
        : "8px 10px 9px 10px")) ||
    (props.size === "medium" &&
      (props.primary
        ? props.icon
          ? props.label
            ? "7px 24px 7px 24px"
            : "7px 10px 7px 10px"
          : props.label
          ? "7px 24px 7px 24px"
          : "7px 10px 7px 10px"
        : props.icon
        ? props.label
          ? "7px 24px 7px 24px"
          : "7px 10px 7px 10px"
        : props.label
        ? "7px 24px 7px 24px"
        : "7px 10px 7px 10px")) ||
    (props.size === "base" &&
      (props.primary
        ? props.icon
          ? props.label
            ? "3px 20px 5px 20px"
            : "3px 5px 5px 5px"
          : props.label
          ? "3px 24px 5px 24px"
          : "3px 5px 5px 5px"
        : props.icon
        ? props.label
          ? "3px 20px 5px 20px"
          : "3px 5px 5px 5px"
        : props.label
        ? "3px 24px 5px 24px"
        : "3px 5px 5px 5px"))};

  cursor: ${props =>
    props.disabled || props.loaded ? "default !important" : "pointer"};

  font-family: ${props => props.theme.fontFamily};
  border: none;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  touch-callout: none;
  -o-touch-callout: none;
  -moz-touch-callout: none;
  -webkit-touch-callout: none;
  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  stroke: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props =>
    !props.primary &&
    css`
      border: 1px solid;
      box-sizing: border-box;
      border-color: ${props =>
        !props.disabled && !props.loaded ? "#D0D5DA" : "#ECEEF1"};
    `}

  ${props =>
    !props.disabled &&
    !props.loaded &&
    (props.hovered
      ? hoverCss
      : css`
          &:hover {
            ${hoverCss}
          }
        `)}

  ${props =>
    !props.disabled &&
    !props.loaded &&
    (props.clicked
      ? activeCss
      : css`
          &:active {
            ${activeCss}
          }
        `)}

  &:focus {
    outline: none
  }

  .btnIcon,
  .loader {
    display: inline-block;
    vertical-align: text-top;
  }

  ${props =>
    props.label &&
    css`
      .btnIcon,
      .loader {
        padding-right: 4px;
      }
    `}
`;

export default StyledButton;
