

import styled, { css } from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { Base } from "../../themes";

const StyledInputWithOperations = styled(Box)`

  display: flex;
  .textInput__operations {

    border-radius: 0px;
  }
  .textInput__operations--input {
 
  }
`;

StyledInputWithOperations.defaultProps = { theme: Base };

export default StyledInputWithOperations;
