import styled from "styled-components";
import { Base } from "../../themes";

const StyledOval = styled.svg`
  width: ${props => (props.size ? props.size : props.theme.loader.size)};
  height: ${props => (props.size ? props.size : props.theme.loader.size)};
  stroke: ${props => (props.color ? props.color : props.theme.loader.color)};

  g {
    g {
      stroke-width: ${props => props.theme.stokeWidth};
    }
  }
`;

const StyledDualRing = styled.svg`
  width: ${props => (props.size ? props.size : props.theme.loader.size)};
  height: ${props => (props.size ? props.size : props.theme.loader.size)};
  stroke: ${props => (props.color ? props.color : props.theme.loader.color)};

  circle {
    stroke: ${props => (props.color ? props.color : props.theme.loader.color)};
  }
`;

StyledOval.defaultProps = {
  theme: Base
};

StyledDualRing.defaultProps = {
  theme: Base
};

export { StyledOval, StyledDualRing };
