import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const styleCss = css`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => (props.color ? props.color : props.theme.text.color)};
  
  outline: none;
  margin: 0;

  ${props =>
    props.truncate === true &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${props =>
    (typeof props.fontSize === "string" &&
      css`
        font-size: ${props.fontSize};
      `) ||
    (typeof props.fontSize === "number" &&
      css`
        font-size: ${props.fontSize}px;
      `)};
  font-weight: ${props =>
    props.bold
      ? props.theme.text.fontWeightBold
      : props.fontWeight
      ? props.fontWeight
      : props.theme.text.fontWeight};
  ${props =>
    props.italic == true &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props => props.backgroundColor};
    `}
  ${props =>
    props.inline
      ? css`
          display: inline-block;
        `
      : props.display &&
        css`
          display: ${props => props.display};
        `}
`;

const StyledText = styled.p`
  ${styleCss};
`;

StyledText.defaultProps = { theme: Base };

export default StyledText;
