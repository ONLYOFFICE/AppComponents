import styled, { css } from "styled-components";
import { tablet } from "../../utils/device";

const fontStyle = css`
  font-family: "Open Sans", sans-serif, Arial;
  font-style: normal;
`;

const disabledAndHeaderStyle = css`
  color: #a3a9ae;

  &:hover {
    cursor: default;
    background-color: white;
  }
`;

const itemTruncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDropdownItem = styled.div`
display: block;
width: 100%;
max-width: 240px;
border: 0px;
cursor: pointer;
margin: 0px;
padding: 0px 16px;
line-height: 32px;
box-sizing: border-box;
text-align: left;
background: none;
text-decoration: none;
user-select: none;
outline: 0 !important;

${fontStyle}

font-weight: 600;
font-size: 13px;
color: #333333;
text-transform: none;

${itemTruncate}

&:hover {
  background-color: ${props => (props.noHover ? "white" : "#F8F9F9")};
  text-align: left;
}

${props =>
  props.isSeparator &&
  css`
    padding: 0px 16px;
    border: 0.5px solid #eceef1;
    cursor: default;
    margin: 6px 16px 6px;
    line-height: 1px;
    height: 1px;
    width: calc(100% - 32px);

    &:hover {
      cursor: default;
    }
  `}

${props =>
  props.isHeader &&
  css`
    ${disabledAndHeaderStyle}

    text-transform: uppercase;
  `}

@media ${tablet} {
  line-height: 36px;
}

${props => props.disabled && disabledAndHeaderStyle}
`;

export default StyledDropdownItem;
