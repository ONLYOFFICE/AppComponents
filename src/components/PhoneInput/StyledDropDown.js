import styled from "styled-components";
import Box from "../Box";
import { Base } from "../../themes";

const StyledDropDown = styled(Box)`
    position: absolute;
    top: 1159;
    left: 15;
    width: 292;
    height: 260;
    z-index: 1999;
    border-radius: 4;
    -moz-border-radius: 4;
    border: 1px solid #d1d1d1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    overflow-x: hidden;
    overflow-y: auto
`;

StyledDropDown.defaultProps = { theme: Base };

export default StyledDropDown;

