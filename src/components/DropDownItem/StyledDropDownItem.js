import styled, { css } from "styled-components";
import { tablet } from "../../utils/device";
import Box from "../Box";
import { Base } from "../../themes";
import { NoUserSelect } from "../../utils/commonStyles";

const StyledDropdownItem = styled(Box)`
  display: block;
  margin: 0px;
  font-family: ${props => props.theme.fontFamily};

  color: ${props => props.theme.dropDownItem.color};
  font-style: ${props => props.theme.dropDownItem.fontStyle};
  font-weight: ${props => props.theme.dropDownItem.fontWeight};
  font-size: ${props => props.theme.dropDownItem.fontSize};

  width: ${props => props.theme.dropDownItem.width};
  max-width: ${props => props.theme.dropDownItem.maxWidth};
  border: ${props => props.theme.dropDownItem.border};
  cursor: ${props => props.theme.dropDownItem.cursor};
  padding: ${props => props.theme.dropDownItem.padding};
  line-height: ${props => props.theme.dropDownItem.lineHeight};
  text-align: ${props => props.theme.dropDownItem.textAlign};
  background: ${props => props.theme.dropDownItem.background};
  text-decoration: ${props => props.theme.dropDownItem.textDecoration};

  ${NoUserSelect};
  
  white-space: ${props => props.theme.dropDownItem.whiteSpace};
  overflow: ${props => props.theme.dropDownItem.overflow};
  text-overflow: ${props => props.theme.dropDownItem.textOverflow};

  outline: ${props => props.theme.dropDownItem.outline};
  text-transform: ${props => props.theme.dropDownItem.textTransform};

  &:hover {    
    background-color: ${props =>
      props.noHover
        ? props.theme.dropDownItem.noHoverBackgroundColor
        : props.theme.dropDownItem.hoverBackgroundColor};
  }

  ${props =>
    props.separator &&
    css`
      padding: ${props => props.theme.dropDownItem.separator.padding};
      border: ${props => props.theme.dropDownItem.separator.border};
      cursor: ${props => props.theme.dropDownItem.separator.cursor};
      margin: ${props => props.theme.dropDownItem.separator.margin};
      line-height: ${props => props.theme.dropDownItem.separator.lineHeight};
      height: ${props => props.theme.dropDownItem.separator.height};
      width: ${props => props.theme.dropDownItem.separator.width};
    `}

  ${props =>
    props.header &&
    css`
      color: ${props => props.theme.dropDownItem.header.color};
      &:hover {
        cursor: ${props => props.theme.dropDownItem.header.hoverCursor};
        background-color: ${props =>
          props.theme.dropDownItem.header.hoverBackgroundColor};
      }
      text-transform: ${props => props.theme.dropDownItem.header.textTransform};
    `}

  @media ${tablet} {
    line-height: ${props => props.theme.dropDownItem.tablet.lineHeight};
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.dropDownItem.disabled.color};

      &:hover {
        cursor: ${props => props.theme.dropDownItem.disabled.hoverCursor};
        background-color: ${props =>
          props.theme.dropDownItem.disabled.hoverBackgroundColor};
      }
    `}
`;

StyledDropdownItem.defaultProps = {
  theme: Base
};

export default StyledDropdownItem;
