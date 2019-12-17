import styled, { css } from "styled-components";

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
  color: ${props => (props.color ? props.color : props.theme.textColor)};
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
    props.isInline &&
    css`
      display: inline-block;
    `}
`;

const StyledHeading = styled.h1`
  ${styleCss};
`;

export default StyledHeading;
