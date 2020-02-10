import styled from "styled-components";
import { Base } from "../../themes";
import Box from "../Box";

const StyledBackdrop = styled(Box)`
  background-color: ${props => props.theme.backdrop.backgroundColor};
  display: ${props => (props.visible ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: ${props => props.zIndex};
  left: 0;
  top: 0;
`;

StyledBackdrop.defaultProps = {
  theme: Base
};

export default StyledBackdrop;
