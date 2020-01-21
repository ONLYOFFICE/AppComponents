import styled from "styled-components";
import { Base } from "../../themes";

const TooltipStyle = styled.div`
  .__react_component_tooltip {
    border-radius: ${props => props.theme.tooltip.borderRadius};
    -moz-border-radius: ${props => props.theme.tooltip.borderRadius};
    -webkit-border-radius: ${props => props.theme.tooltip.borderRadius};
    box-shadow: ${props => props.theme.tooltip.boxShadow};
    -moz-box-shadow: ${props => props.theme.tooltip.boxShadow};
    -webkit-box-shadow: ${props => props.theme.tooltip.boxShadow};
    opacity: ${props => props.theme.tooltip.opacity};
    padding: ${props => props.theme.tooltip.padding};
    pointer-events: ${props => props.theme.tooltip.pointerEvents};
    max-width: ${props => props.theme.tooltip.maxWidth};
    background-color: ${props => props.theme.tooltip.backgroundColor};

    &:before {
      border: ${props => props.theme.tooltip.before.border};
    }
    &:after {
      border: ${props => props.theme.tooltip.after.border};
    }
  }
`;

TooltipStyle.defaultProps = {
  theme: Base
};

export default TooltipStyle;
