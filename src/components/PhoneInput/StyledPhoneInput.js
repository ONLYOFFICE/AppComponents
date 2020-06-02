import styled from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import TextInput from "../TextInput";
import { Base } from "../../themes";

const StyledPhoneInput = styled(TextInput)`
    border: 0;
    font-size: 16px;
    padding: 11px 16px 11px 5px;


`;

StyledPhoneInput.defaultProps = { theme: Base };

export default StyledPhoneInput;
