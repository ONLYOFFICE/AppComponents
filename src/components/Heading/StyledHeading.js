import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const fontSize = css`
  ${props =>
    (props.size === "xlarge" && 27) ||
    (props.size === "large" && 23) ||
    (props.size === "medium" && 21) ||
    (props.size === "small" && 19) ||
    (props.size === "xsmall" && 15)}
`;

const styleCss = css`
  font-family: ${props => props.theme.fontFamily};
  text-align: left;
  color: ${props => (props.color ? props.color : props.theme.text.color)};
  ${props =>
    props.truncate === true &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  font-size: ${fontSize}px;
  font-weight: 600;
  ${props =>
    props.inline &&
    css`
      display: inline-block;
    `}
`;

const StyledHeading = styled.h1`
  ${styleCss};
`;

StyledHeading.defaultProps = { theme: Base };

export default StyledHeading;
