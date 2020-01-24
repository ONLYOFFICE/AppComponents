import styled, { css } from "styled-components";
import Box from "../Box";
import { Base } from "../../themes";

const StyledDropdown = styled(Box)`
    position: absolute;
    
    ${props =>
      props.maxHeight &&
      css`
        max-height: ${props.maxHeight}px;
        overflow-y: auto;
      `}

    ${props =>
      props.manualWidth &&
      css`
        width: ${props.manualWidth};
      `}
    ${props =>
      props.directionY === "top" &&
      css`
        top: ${props => (props.manualY ? props.manualY : "100%")};
      `}
    ${props =>
      props.directionY === "bottom" &&
      css`
        bottom: ${props => (props.manualY ? props.manualY : "100%")};
      `}
    ${props =>
      props.directionX === "right" &&
      css`
        right: ${props => (props.manualX ? props.manualX : "0px")};
      `}
    ${props =>
      props.directionX === "left" &&
      css`
        left: ${props => (props.manualX ? props.manualX : "0px")};
      `}

    z-index: ${props => props.theme.dropDown.zIndex};
    display: ${props => (props.open ? "block" : "none")};
    background: ${props => props.theme.dropDown.background};
    border-radius: ${props => props.theme.dropDown.borderRadius};
    -moz-border-radius: ${props => props.theme.dropDown.borderRadius};
    -webkit-border-radius: ${props => props.theme.dropDown.borderRadius};

    box-shadow: ${props => props.theme.dropDown.boxShadow};
    -moz-box-shadow: ${props => props.theme.dropDown.boxShadow};
    -webkit-box-shadow: ${props => props.theme.dropDown.boxShadow};
    padding: ${props => props.theme.dropDown.padding};
`;

StyledDropdown.defaultProps = {
  theme: Base
};

export default StyledDropdown;
