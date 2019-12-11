import styled, { css } from "styled-components";

const styleCss = css`
  font-family: 'Open Sans', sans-serif, Arial;
  text-align: left;
  color: ${props => props.color};
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
    props.fontWeight ? props.fontWeight : props.isBold == true ? 700 : 500};
  ${props =>
    props.isItalic == true &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props => props.backgroundColor};
    `}
  ${props =>
    props.isInline
      ? css`
          display: inline-block;
        `
      : props.display &&
        css`
          display: ${props => props.display};
        `}
  margin: 0;
`;

const StyledText = styled.p`
  ${styleCss};
`;

export default StyledText;
