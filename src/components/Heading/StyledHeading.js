import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const fontSize = css`
  ${props =>
    (props.size === "xlarge" && props.theme.heading.fontSize.xlarge) ||
    (props.size === "large" && props.theme.heading.fontSize.large) ||
    (props.size === "medium" && props.theme.heading.fontSize.medium) ||
    (props.size === "small" && props.theme.heading.fontSize.small) ||
    (props.size === "xsmall" && props.theme.heading.fontSize.xsmall)}
`;

const styleCss = css`
  margin: 0;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => (props.color ? props.color : props.theme.text.color)};
  ${props =>
    props.truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  font-size: ${fontSize};
  font-weight: ${props => props.theme.heading.fontWeight};
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
